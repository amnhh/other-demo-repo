/**
 * Author : Amnhh
 * Email : amnhhlod@gmail.com
 * Date : 2017/3/27
 */

var obj = {
  // toJSON : function () {
  //   return `Amnhh`
  // },
  test1 : `Again1`,
  test2 : `Again2`,
  test3 : `Again3`
}

console.log(JSON.stringify(obj))
console.log(JSON.stringify(obj, [`test1`]))
console.log(JSON.stringify(obj, function (k, v) {
  if (k !== `test1`) return v
}))
console.log(JSON.stringify(obj, function (k, v) {
  if (k !== `test1`) return v
}, 3))
console.log(JSON.stringify(obj, null, 3))