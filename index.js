const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function LASTMODIFIED(content, _options = {}, config) {
  let filePath;

  const options = _options || {};

  if (options.file) {
    filePath = path.resolve(path.dirname(config.originalPath), options.file);
  } else {
    filePath = path.resolve(config.originalPath);
  }

  const root = execSync(
    'git rev-parse --show-toplevel',
    { encoding: 'utf8' }
  ).trim();

  const relativeFilePath = path.relative(root, filePath);
  const cmd = `echo "$(git log -1 --format="%ad" -- "${ filePath }")"`;
  const lastModified = execSync(cmd, { encoding: 'utf8'}).trim());
  return [`**${ filepath }** last modified ${ lastModified }`];
}

module.exports = LASTMODIFIED;
