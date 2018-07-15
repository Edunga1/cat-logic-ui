const app = require('./app');

const port = 4200;

app.listen(port, () => {
  console.log('app listening on port', port);
});
