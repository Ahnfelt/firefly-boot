#!/bin/bash
set -e
firefly=`dirname "$0"`
node "$firefly/output/js/ff/compiler/Main.mjs" "$firefly" $@
[[ -f ".firefly/output/run" ]] && source ".firefly/output/run"