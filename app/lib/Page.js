const pt = require('path');

module.exports = class Page {
  /**
   * @param {string} path
   * @param {string} content
   */
  constructor(path, content) {
    this.path = path;
    this.content = content;
  }

  /**
   * @param {number} [len=1]
   * @return {string}
   */
  less(len = 1) {
    const basename = pt.basename(this.path);
    const dirnames = pt.dirname(this.path).split(pt.sep);
    const lessDirnames = dirnames.slice(Math.max(0, dirnames.length - len), dirnames.length);
    return pt.join(...lessDirnames, basename);
  }

  /**
   * @return {string}
   */
  summary() {
    return (this.content.match(/^[^\n]*/) || [''])[0];
  }
};
