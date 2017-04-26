/**
 * Created by anning on 2017/3/23.
 */
// `setTimeout` 第一个参数需要接受一个 `function` 类型
// 这里是一个 `undefined`, 所以在 `node` 环境直接执行会报错 = =
// 浏览器里面其实也一直会报错, 但是还是会输出 `0-9` -> 要注意其实是在第一个参数尝试去注册的时候, 执行了 `console.log`, 而非 `setTimeout` 延时后的执行结果, 所以这里是立即输出的 `0-9`
for (var i = 0; i < 10; i ++) {
  setTimeout((function () {
    console.log(i);
  })(i), 1000);
}