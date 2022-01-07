#!/bin/bash

f=`basename "$1"`
m="${f%.*}"
p=`pwd`
firefly=`dirname "$0"`
mkdir -p .firefly

(
	cd "$firefly" &&
	node output/js/ff/compiler/Main.mjs script:script "$m" "script:script@$p",ff:core@core "$p/.firefly/temporary" "$p/.firefly/output"
) &&
node ".firefly/output/script/script/$m.mjs"
