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
        
    const fireflyCompiler = fireflyPath + '/output/js/ff/compiler/Main.run.mjs';

    context.subscriptions.push(vscode.commands.registerCommand('extension.firefly-lang.getFireflyPath', config => {
        return fireflyPath;
    }));

    context.subscriptions.push(vscode.commands.registerCommand('extension.firefly-lang.getFireflyCompiler', config => {
        return fireflyCompiler;
    }));
    
    let runFireflyProgramCommand = vscode.commands.registerCommand(
		"extension.firefly-lang.runFireflyProgram",
		async () => {
			const editor = vscode.window.activeTextEditor;
			if(!editor) {
				vscode.window.showErrorMessage("No active text editor.");
				return;
			}
			const filePath = editor.document.fileName;
            const fileDirectory = require('path').dirname(filePath);
            const fileName = require('path').basename(filePath);
			const terminal = vscode.window.createTerminal("firefly");
            terminal.sendText(`cd "${fileDirectory}" # npm install -g firefly-compiler`);
            terminal.sendText(`firefly "${fileName}"`);
			terminal.show();
		}
	);
    
    context.subscriptions.push(runFireflyProgramCommand);
    
    let runFireflyProgramButton = vscode.window.createStatusBarItem(
		vscode.StatusBarAlignment.Left
	);
	runFireflyProgramButton.text = "$(triangle-right) Run Firefly Program";
	runFireflyProgramButton.command = "extension.firefly-lang.runFireflyProgram";

    context.subscriptions.push(runFireflyProgramButton);
    
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
        synchronize: {
             // It would be more portable to send a client/registerCapability from the server for this
            fileEvents: vscode.workspace.createFileSystemWatcher('**/*.ff')
        }
    };

    client = new LanguageClient(
        'firefly',
        'Firefly Language Server',
        serverOptions,
        clientOptions
    );

    client.start();
    
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(editor => {
        if(editor && editor.document.languageId === 'firefly') {
            client.sendNotification('custom/focusDocument', {
                "textDocument": {
                    uri: editor.document.uri.toString(),
                    version: editor.document.version,
                }
            });
        }
    }));

    const decorationProvider: vscode.FileDecorationProvider = {
        provideFileDecoration(uri: vscode.Uri): vscode.FileDecoration | undefined {
            if(fs.existsSync(path.join(uri.fsPath, '.firefly/package.ff'))) {
                return {
                    tooltip: 'Firefly package folder',
                    color: new vscode.ThemeColor('charts.blue'),
                };
            }
        }
    };

    context.subscriptions.push(vscode.window.registerFileDecorationProvider(decorationProvider));
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
