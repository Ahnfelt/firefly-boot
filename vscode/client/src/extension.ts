import * as path from 'path';
import { workspace, extensions, ExtensionContext } from 'vscode';

import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
    TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {

    let fireflyPath = process.env.FIREFLY_HOME // Start code from the vscode directory with: FIREFLY_HOME=$PWD/.. code .

    const runOrDebug = {
        command: fireflyPath + '/firefly.sh',
        args: ['LanguageServer.ff'],
        options: {cwd: fireflyPath + '/experimental/random'},
        transport: TransportKind.stdio // ipc
    };
    const serverOptions: ServerOptions = {
        run: runOrDebug,
        debug: runOrDebug
    };

    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: 'file', language: 'firefly' }],
        synchronize: {
            fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
        }
    };

    client = new LanguageClient(
        'fireflyLsp',
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
