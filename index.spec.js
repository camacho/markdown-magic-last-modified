import { mkdirSync, rmSync, writeFileSync } from 'fs';
import path from 'path';
import { describe, expect, it } from 'vitest';
import format from './index.js';

const srcPath = path.join(import.meta.dirname, 'README.md');

describe('markdown-magic-last-modified', () => {
  it('renders the last git-modified date of the source file', () => {
    const result = format({ content: 'foo', options: {}, srcPath });
    expect(result).toMatch(/^\*\*README\.md\*\* last modified .+$/);
  });

  it('returns original content when the target file has no git history', () => {
    const fixturesDir = path.join(import.meta.dirname, '__fixtures__');
    const untrackedFile = path.join(fixturesDir, 'untracked.md');

    mkdirSync(fixturesDir, { recursive: true });
    writeFileSync(untrackedFile, '');

    try {
      const result = format({
        content: 'untouched',
        options: { file: './__fixtures__/untracked.md' },
        srcPath,
      });
      expect(result).toBe('untouched');
    } finally {
      rmSync(untrackedFile);
    }
  });
});
