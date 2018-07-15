module.exports = (req, res, next) => {
  res.on('finish', () => {
    console.info(`${res.statusCode} ${res.statusMessage}; ${res.get('Content-Length') || 0}b sent`);
  });
  next();
};
