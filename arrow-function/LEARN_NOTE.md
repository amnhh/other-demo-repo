`arrow-function` 的 `this` 在定义时候就已经确定

它本身是没有 `this` 的, 需要向上一层作用域寻求 `this`

所以在定义的时候就已经确定的意思就是, 他在定义的时候就已经将自己的 `this` 和他的上一层作用域的 `this` 所绑定起来, 和别个保持一致

在执行期间的 `arrow-function` 的 `this`, 是取决于他上一层作用域的 `this` 的取值的

```js
var obj = {
  func : function () {
    var arrow1 = () => {
      console.log(this)
    }
    arrow1();
  }
}

obj.func(); // 这时候 `arrow1` 的 `this` 继承自 `obj.func`, `obj.func` 的 `this` 在调用时决定, 显而易见其指向 `obj`
var otherNameObjFunc1 = obj.func;
otherNameObjFunc1();// 这里的 `arrow1` 还是继承自 `obj.func` 的作用域, 但是 `obj.func` 所指向的函数现在名字叫做 `otherNameObjFunc1`, 它在调用的时候直接由 `window` 调用, 所以内部 `this` 就会指向 `window`, 所以 `arrow1` 的 `this` 也继承了上一级的, 指向了 `window`
```