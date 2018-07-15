const util = require('util');
const readFile = util.promisify(require('fs').readFile);
const glob = util.promisify(require('glob'));
const Page = require('../../lib/Page');

module.exports = path => (
  glob(`${path}/**/*.md`, {}).then((files) => {
    const promises = files.map(file => (
      readFile(file, 'utf-8').then(content => ({
        path: file,
        content,
      }))
    ));
    const pages = Promise.all(promises)
      .then(objs => objs.map(obj => new Page(obj.path, obj.content)));
    return pages;
  })
);
