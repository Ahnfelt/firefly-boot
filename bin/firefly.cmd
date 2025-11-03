@echo off
SETLOCAL
SET firefly_link=%~f0
FOR %%I IN ("%firefly_link%") DO SET firefly=%%~dpI\..
SET NODE_PATH=%firefly%node_modules;%NODE_PATH%
node --enable-source-maps --harmony-temporal "%firefly%output\js\ff\compiler\Main.run.mjs" %*
