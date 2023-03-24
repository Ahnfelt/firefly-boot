#!/usr/bin/env bash
rm -f stdin.txt
rm -f stdout.txt
rm -f stderr.txt
tee -a stdin.txt | ../firefly.sh LanguageServer.ff 2> stderr.txt | tee -a stdout.txt
