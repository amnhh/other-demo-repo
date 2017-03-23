/**
 * Created by anning on 2017/3/23.
 */

// 而 setTimeout 是会放在下次事件循环中执行
setTimeout(() => {
  console.log('I\'m setTimeout 0 consoling.')
});

var pms = new Promise((resolve, reject) => {
  resolve();
});

// then 会把该事件放在 `Promise()` 状态变为 `resolve` 的那次事件循环的最后
// 当然如果上级 `Promise` 都没有 `resolve` 的话, `then` 里面的永远不会执行到
pms.then(() => {
  console.log('I\'m then consoling.');
});