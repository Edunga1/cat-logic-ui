const getPages = require('./get-pages');

module.exports = (req, res) => {
  const { booksPath } = res.config;

  getPages(booksPath)
    .then((pages) => {
      const filename = pages.map(page => `${page.less()}\t\t${page.summary()}`);
      res.render('index', { data: filename.join('<br>') });
    })
    .catch(() => {
      res.render('index', { data: 'err!' });
    });
};
