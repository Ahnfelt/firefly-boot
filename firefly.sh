#!/bin/bash
set -e
firefly="$(dirname "$(readlink -f "$0")")"
node "$firefly/output/js/ff/compiler/Main.mjs" "$firefly" $@
[[ -f ".firefly/output/run" ]] && source ".firefly/output/run"
