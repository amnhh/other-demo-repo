function umd (name, component) {
  // switch (true) 比 if/else 效率更高
  switch (true) {
    // module.exports
    case typeof module === 'object' && !!module.exports :
      module.exports = component;
      break;
    // define
    case typeof define === 'function' && define.amd :
      define(name, function () {
        return component;
      });
      break;
    default :
      try {
        if (typeof esecScripts === 'object') esecScripts('var' + name);
      } catch (err) {
        // window[name]
        window[name] = component;
      }
  };
};