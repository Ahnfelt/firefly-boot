rm -f lsp-debug.txt
tee -a lsp-debug.txt | ../../firefly.sh LanguageServer.ff | tee -a lsp-debug.txt