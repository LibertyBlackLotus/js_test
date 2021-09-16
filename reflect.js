/**
 * reflect
 */

// apply
/*let test1 = Reflect.apply(Math.floor, undefined, [1.75]);
let test2 = Math.floor(1.75);
console.log(test1);
console.log(test2);
let test3 = Reflect.apply("".charAt, "ponies", [3]);
console.log(test3);*/


// constructor
/*var obj = Reflect.construct(Foo, args);
//相关于
var obj1 = new Foo(...args);*/

/*
function OneClass() {
	this.name = 'one';
}

function OtherClass() {
	this.name = 'other';
}

var obj1 = Reflect.constructor(OneClass, args, OtherClass);
//相当于
var obj2 = Object.create(OtherClass.prototype);
OneClass.apply(obj2, args);*/


// has()
/*console.log(Reflect.has({x: 0}, "x"));
console.log(Reflect.has({x: 0}, "y"));
//相当于
console.log("x" in {x: 0});
console.log("y" in {x: 0});*/


// ownKeys()
//Reflect.ownKeys 方法返回一个由目标对象自身的属性键组成的数组。
// 它的返回值等同于
// Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))。

/*const obj1 = {
	property1: 42,
	property2: 13
};

const array1 = [];
console.log(Reflect.ownKeys(obj1));
console.log(Reflect.ownKeys(array1));*/


// set()
/*var obj = {};
Reflect.set(obj, "prop", "value");
console.log(obj);

var arr = ["duck", "duck", "duck"];
Reflect.set(arr, 2, "goose");
console.log(arr);
Reflect.set(arr, "length", 1);
console.log(arr);*/


// setPrototypeOf()
// Reflect.setPrototypeOf({}, Object.prototype);

