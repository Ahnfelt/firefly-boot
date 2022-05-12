#!/bin/bash
set -e
firefly=`dirname "$0"`
node output/js/ff/compiler/Main.mjs "$firefly" $@
