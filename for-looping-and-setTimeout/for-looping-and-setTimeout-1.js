/**
 * Created by anning on 2017/3/23.
 */
// 一、
// 解析到 `setTimeout` 的时候, 会把整个 `setTimeout` 丢到事件循环的末尾
// 等到本次执行完毕之后, 就会发现 `i` 已经变成了 `10`, 所以会打印十个 `10`
for (var i = 0; i < 10; i ++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}
