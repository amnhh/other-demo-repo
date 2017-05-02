/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/5/3
 *
 * From : jQuery -> callback
 */

const createOptions = str => {
  const ret = {};
  let _str = str.split(' ');

  _str.map(val => {
    ret[val] = true;
  });

  return ret;
}

function Callback (options) {
  options = typeof options === 'string'
    // 是 string 就先转成 obj
    ? createOptions(options)
    // 不是 string 就取一份他的拷贝
    : Object.assign({}, options);

  // 一个锁子, 闭包的应用, 对一组 Callback, 这个 locked 会一直存在于内存中
  let locked;
  let fired;
  let firing;
  let fireIndex = -1;

  const list = [];
  const queue = [];

  let fire = function () {
    locked = locked || options.once;

    // flag 置 true
    fired = firing = true;

    while (++ fireIndex < list.length) {
      if (list[fireIndex].apply()) {}
    }
  };
}

export default Callback;