#!/bin/bash

target="$1"
f=`basename "$2"`
m="${f%.*}"
p=`pwd`
firefly=`dirname "$0"`
mkdir -p .firefly

if [ "$target" == "run" ]; then
  node --experimental-fetch ".firefly/output/node/script/script/$m.mjs"
elif [[ "$target" == *":"* ]]; then
  targets=$(echo "$target" | tr ":" "\n")
  set -e
  for t in $targets; do
    "$0" "$t" "$2"
  done
else
  (
  	cd "$firefly" && (
  	  [[ -d "$p/.firefly/output" ]] || mkdir "$p/.firefly/output"
  	  node output/js/ff/compiler/Main.mjs "$target" script:script "$m" "script:script@$p",ff:core@core "$p/.firefly/temporary" "$p/.firefly/output/$target"
    )
  )
fi
