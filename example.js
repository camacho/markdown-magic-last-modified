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
