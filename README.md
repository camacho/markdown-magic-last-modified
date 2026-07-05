> **📦 This package has moved.** It now lives in the [markdown-magic-plugins](https://github.com/camacho/markdown-magic-plugins) monorepo at [`packages/last-modified`](https://github.com/camacho/markdown-magic-plugins/tree/main/packages/last-modified). This repository is archived; issues and contributions go to the monorepo.

# Install command plugin

Add install command to markdown files via [markdown-magic](https://github.com/DavidWells/markdown-magic)

## Install

```
npm i markdown-magic markdown-magic-last-modified --save-dev
```

## Adding the plugin

See `example.js` for usage.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./example.js) -->

```js
import path from 'path';
import { markdownMagic } from 'markdown-magic';
import LASTMODIFIED from './index.js';

const config = {
  matchWord: 'AUTO-GENERATED-CONTENT',
  transforms: {
    LASTMODIFIED,
  },
};

const markdownPath = path.join(import.meta.dirname, 'README.md');
await markdownMagic(markdownPath, config);
```

<!-- AUTO-GENERATED-CONTENT:END *-->

## Usage in markdown

<!-- AUTO-GENERATED-CONTENT:START (LASTMODIFIED) -->

**README.md** last modified Sat Mar 26 15:49:09 2022 +0100
<!-- AUTO-GENERATED-CONTENT:END -->

## Options

- **file** (current file by default) - file to get last modified date from (relative to the Markdown file)