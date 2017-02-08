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

var proto = LazyLoad.prototype;

proto.init = function () {

};