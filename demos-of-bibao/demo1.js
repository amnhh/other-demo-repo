// 闭包实现单例模式
(function () {
  var myObj = null;
  
  function init () {
    if (myObj === null) {
      myObj = new Amnhh();
      return myObj;
    } else {
      return myObj;
    }
  }

  function Amnhh () {
    // ... 
  }

  return init;
})()

