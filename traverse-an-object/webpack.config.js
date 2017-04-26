var path = require('path');

module.exports = {
  // 卧槽。。这里还必须加上 ./
  entry : './index.js',
  output : {
    filename : 'amnhh.js',
    // 卧槽。。这里也必须加上 ./
    // 不加直接生成了 `/dist`... 要在根目录下生成...
    path : path.resolve(__dirname, './dist')
  }
};