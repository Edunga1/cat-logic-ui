// const yaml = require('yamljs');

module.exports = contents => (
  (contents.match(/^---\n(?:.+\s)+---/) || [''])[0]
);
// module.exports = contents => (
//   yaml.parse(
//     (contents.match(/^---\n(?:.+\s)+---/) || [''])[0],
//   )
// );
