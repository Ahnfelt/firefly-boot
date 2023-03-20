#!/bin/bash
set -e
echo "After booting VSCode, press F5 to run a new VSCode window with the extension enabled."
firefly_sh="$(readlink -f "$0")"
firefly_vscode="$(dirname "$firefly_sh")"
firefly="$(readlink -f "$firefly_vscode/..")"
FIREFLY_HOME="$firefly" code "$firefly_vscode"
