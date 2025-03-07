#!/bin/bash
set -e
firefly_link=`readlink -f "$0"`
firefly=`dirname "$firefly_link"`
node --harmony-temporal "$firefly/output/js/ff/compiler/Main_run.mjs" $@
