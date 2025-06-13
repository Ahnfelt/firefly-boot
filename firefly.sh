#!/bin/bash
set -e
firefly_link=`readlink -f "$0"`
firefly=`dirname "$firefly_link"`
node --enable-source-maps --harmony-temporal "$firefly/output/js/ff/compiler/Main.run.mjs" $@
