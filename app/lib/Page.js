module.exports = class Page {
  /**
   * @param {string} path
   * @param {string} content
   */
  constructor(path, content) {
    this.path = path;
    this.content = content;
  }
};
