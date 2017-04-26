import forIn from './src/for-in';

import objectKeys from './src/object-keys';

import getOwnPropertyNames from './src/get-own-property-names';

var obj = {
  amnhh1 : 1,
  amnhh2 : 2,
  amnhh3 : 3,
  amnhh4 : 4
};

var son = Object.create(obj);

son.again1 = 1;
son.again2 = 2;
son.again3 = 3;
son.again4 = 4;

var enumerableFalseObject = {
  amnhh1 : 1,
  amnhh2 : 2,
  amnhh3 : 3,
  amnhh4 : 4
};

// 手动置为不可枚举
Object.defineProperty(enumerableFalseObject, 'amnhh1', {
  enumerable : false,
});


/* for-in */
console.log(forIn(obj)); // ["amnhh1", "amnhh2", "amnhh3", "amnhh4"]
 
// 原型链上的也一样会被搞出来
console.log(forIn(son)); // ["again1", "again2", "again3", "again4", "amnhh1", "amnhh2", "amnhh3", "amnhh4"]

// 不可枚举的属性不能被搞出来
console.log(forIn(enumerableFalseObject)); // ["amnhh2", "amnhh3", "amnhh4"]

/* Object.keys */
console.log(objectKeys(obj)); // ["amnhh1", "amnhh2", "amnhh3", "amnhh4"]

// 只会跑出来自身上挂着的
console.log(objectKeys(son)); // ["again1", "again2", "again3", "again4"]

// 不可枚举的属性不能被 Object.keys 搞出来
console.log(objectKeys(enumerableFalseObject)); // ["amnhh2", "amnhh3", "amnhh4"]

/* Object.getOwnPropertyNames */
console.log(getOwnPropertyNames(obj)); // ["amnhh1", "amnhh2", "amnhh3", "amnhh4"]

// 原型链上不会被遍历出来
console.log(getOwnPropertyNames(son)); // ["again1", "again2", "again3", "again4"]

// 自身不可枚举的属性也会被遍历出来
console.log(getOwnPropertyNames(enumerableFalseObject)); // ["amnhh1", "amnhh2", "amnhh3", "amnhh4"]

