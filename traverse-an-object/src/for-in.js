// for in 把所有可枚举的都搞到了, 但是要看下原型链上的。。。
export default function (_obj) {
  var ret = [];

  for (var i in _obj) {
    ret.push(i);
  }

  return ret;
};
