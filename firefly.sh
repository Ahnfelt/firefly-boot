#!/bin/bash
set -e
firefly_link=`readlink -f "$0"`
firefly=`dirname "$firefly_link"`
node "$firefly/output/js/ff/compiler/Main.mjs" "$firefly" $@
[[ -f ".firefly/output/run" ]] && source ".firefly/output/run"
