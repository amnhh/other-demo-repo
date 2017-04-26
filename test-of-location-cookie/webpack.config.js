var path = require('path');

module.exports = {
  entry : './test.js',
  output : {
    library : 'LC',
    filename : 'test.js',
    path : path.resolve(__dirname, './dist')
  }
};