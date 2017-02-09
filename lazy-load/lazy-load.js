// 参考 barretlee 写的 lazyload 插件
// 地址 : https://github.com/barretlee/lazyload/blob/master/index.js
function LazyLoad (selector, property, options) {
  // 没传入 selector 的话会默认对全部的图片进行懒加载
  this.selector = selector || 'img';
  // 真实地址默认存储属性, 默认为 lazy-src
  this.property = property || 'lazy-src';

  // 把 options 全都存放在 key 里面
  var options = options || {};
  for (var name in options) {
    this.key[name] = options[name];
  }

  this.elements = querySelectorAll(selector);
  this.init();
}

LazyLoad.timeout = 30;

var proto = LazyLoad.prototype;

proto.init = function () {
  var self = this;
  // 最开始的时候就调用一次
  self.showElementIfInScreen();
  // resize 的时候触发
  addEventListener('resize', function () {
    setTimeout(self.showElementIfInScreen, LazyLoad.timeout);
  });
  // scroll 的时候触发
  addEventListener('scroll', function () {
    setTimeout(self.showElementIfInScreen, LazyLoad.timeout);
  });
};

proto.showElementIfInScreen = function () {
  // length -> 0
  if (!this.elements.length) {
    return;
  }
  var W = window.innerWidth || document.documentElement.clientWidth;
  var H = window.innerHeight || document.documentElement.clientHeight;

  for (var i = 0, len = this.elements.length; i < len; i ++) {
    var elem = this.elements[i];
    var ract = elem.getBoundingClientRect();
    if (ract.top <= H && ract.left <= W) {
      this.loadPic(elem);
      // 移除已 load 的项
      this.elements.splice(i, 1);
      // 修正 i
      i --;
    }
  }
};

proto.loadPic = function (ele) {
  var imgs = ele.getElementsByTagName('img');
  for (var i = 0, i < imgs.length; i < len; i ++) {
    var img = imgs[i];
    var src = img.getAttribute(this.property);
    src && img.setAttribute('src', src);
  }
};

// addEventListener 兼容版, 引用地址 : https://github.com/barretlee/lazyload/blob/master/index.js
function addEventListener(evt, fn){
  window.addEventListener
  ? this.addEventListener(evt, fn, false)
  : (window.attachEvent)
    ? this.attachEvent('on' + evt, fn)
    : this['on' + evt] = fn;
}
