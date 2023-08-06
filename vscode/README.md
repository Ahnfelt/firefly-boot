# Firefly language support

This extension adds support for the Firefly programming language (`.ff` files). It should work out of the box with no configuration, and comes with the following features:

- Autocompletion
- Go to definition
- Find references
- Signature help
- Symbol renaming
- Document and workspace symbols
- Show type on hover
- Diagnostics`*`

`*` Diagnostics don't currently update automatically when included files have been edited. It's disabled for performance reasons, and we're working on a solution.

You can run `.ff` main files via the usual *Run and Debug* side panel - just choose *create a launch.json file*. After that you can also press *F5* to run the currently open file.

