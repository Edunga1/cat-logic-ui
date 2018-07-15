module.exports = (req, res, next) => {
  res.config = {
    booksPath: process.argv[2] || '',
  };
  next();
};
