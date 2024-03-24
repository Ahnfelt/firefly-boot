import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
    TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: vscode.ExtensionContext) {

    const fireflyPath = fs.existsSync(path.join(context.extensionPath, '.vsixmanifest'))
        ? path.join(context.extensionPath, 'firefly')
        : path.join(context.extensionPath, '..')
        
    const fireflyCompiler = fireflyPath + '/output/js/ff/compiler/Main.mjs';

    context.subscriptions.push(vscode.commands.registerCommand('extension.firefly-lang.getFireflyPath', config => {
        return fireflyPath;
    }));

    context.subscriptions.push(vscode.commands.registerCommand('extension.firefly-lang.getFireflyCompiler', config => {
        return fireflyCompiler;
    }));
    
    const runOrDebug = {
        module: fireflyCompiler,
        args: ['LanguageServer.ff'],
        options: {cwd: fireflyPath + '/lsp'},
        transport: TransportKind.stdio // ipc
    };

    const serverOptions: ServerOptions = {
        run: runOrDebug,
        debug: runOrDebug
    };  

    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: 'file', language: 'firefly' }],
        //synchronize: {
        //    fileEvents: vscode.workspace.createFileSystemWatcher('**/.clientrc')
        //}
    };

    client = new LanguageClient(
        'firefly',
        'Firefly Language Server',
        serverOptions,
        clientOptions
    );

    client.start();
    
    vscode.window.onDidChangeActiveTextEditor(editor => {
        if(editor && editor.document.languageId === 'firefly') {
            client.sendNotification('custom/focusDocument', {
                "textDocument": {
                    uri: editor.document.uri.toString(),
                    version: editor.document.version,
                }
            });
        }
    });
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
