# Install command plugin

Add install command to markdown files via [markdown-magic](https://github.com/DavidWells/markdown-magic)

## Install

```
npm i markdown-magic markdown-magic-last-modified --save-dev
```

## Adding the plugin

See `example.js` for usage.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./example.js) -->
<!-- The below code snippet is automatically added from ./example.js -->
```js
const fs = require('fs');
const path = require('path');
const markdownMagic = require('markdown-magic');

const config = {
  transforms: {
    LASTMODIFIED: require('./index.js'),
  }
}

const markdownPath = path.join(__dirname, 'README.md');
markdownMagic(markdownPath, config);
```
<!-- AUTO-GENERATED-CONTENT:END *-->

## Usage in markdown

<!-- AUTO-GENERATED-CONTENT:START (LASTMODIFIED) -->
```sh
npm install --save-dev markdown-magic-install-command@1.2.0
```
<!-- AUTO-GENERATED-CONTENT:END -->

## Options

* **file** (current file by default) - file to get last modified date from (relative to the Markdown file)
