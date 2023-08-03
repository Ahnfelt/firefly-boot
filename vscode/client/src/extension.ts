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

    let fireflyPath = vscode.workspace.getConfiguration().get<string>('firefly.path')
    if(fireflyPath == null || fireflyPath == '') {
        vscode.window.showErrorMessage("Please set firefly.path in your configuration and reload.")
        return
    }

    const commandName = 'firefly.run';
    const commandHandler = () => {
        const editor = vscode.window.activeTextEditor;
        if(editor) {
            const fileName = vscode.workspace.asRelativePath(editor.document.fileName);;
            const terminal = vscode.window.createTerminal('Firefly');
            terminal.show();
            terminal.sendText(`${fireflyPath}/firefly.sh "${fileName}"`);
        }
    };
    context.subscriptions.push(vscode.commands.registerCommand(commandName, commandHandler));

    const runOrDebug = {
        //command: fireflyPath + '/firefly.sh',
        //command: "./languageServer.sh",
        module: fireflyPath + '/output/js/ff/compiler/Main.mjs',
        args: ['LanguageServer.ff'],
        //args: [fireflyPath + '/lsp/LanguageServer.ff'],
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
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
