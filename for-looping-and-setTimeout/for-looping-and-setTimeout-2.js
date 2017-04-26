/**
 * Created by anning on 2017/3/23.
 */

// 二、
// 这里把 `i` 当做一个变量传入 `setTimeout` 的内置函数中
// 就可以理解为是保存了每次执行时候的 `i` 的取值 -> 注意此时, 只是注册, 而非执行
// 所以这里会打印 `0-9` 十个数字
for (var i = 0; i < 10; i ++) {
  setTimeout(function (i) {
    console.log(i);
  }, 1000, i)
}