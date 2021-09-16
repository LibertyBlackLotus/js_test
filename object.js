
/**
 * object
 */


/* 属性 */
// 无论返回值是什么，每次访问对象的属性就是属性访问。如果属性访问返回的
// 是一个函数，那它也并不是一个“方法”。属性访问返回的函数和其他函数没有任何区别。
/*function foo(){
	console.log('foo');
}
var someFoo = foo;

var myObject = {
	someFoo: foo
};

console.log(foo);              // f foo(){...}
console.log(someFoo); 		   // f foo(){...}
console.log(myObject.someFoo); // f foo(){...}
console.log(someFoo === myObject.someFoo); // true*/


// 即使你在对象的文字形式中声明一个函数表达式，这个函数也不会“属于”这个对象，
// 它们只是对于相同函数对象的多个引用。
/*var myObject = {
	foo: function(){
		console.log('foo');
	}
};
var someFoo = myObject.foo;
console.log(someFoo);      // f foo(){...}
console.log(myObject.foo); // f foo(){...}*/


/* 复制对象 */
// 浅复制
/* assign() */
/*const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target);
console.log(returnedTarget);
console.log(target === returnedTarget);*/

/* getOwnPropertyDescriptor */
/*var myObject = {
	a: 2
};
console.log(Object.getOwnPropertyDescriptor(myObject, 'a'));*/

/* defineProperty() */
/*const object1 = {};
Object.defineProperty(object1, 'property1', {
	value: 42,
	writable: true
});
console.log(object1);
object1.property1 = 77;
console.log(object1);*/

/*var obj = {};
var descriptor = Object.create(null);
descriptor.value = 'static';
Object.defineProperty(obj, 'key', descriptor);
console.log(obj);*/

/*Object.defineProperty(obj, 'key', {
	enumerable: false,
	configurable: false,
	writable: false,
	value: "static"
});
console.log(obj);*/


/* 不变性 */
// 1、对象常量
/*var myObject = {};
Object.defineProperty(myObject, 'FAVORITE NUMBER', {
	value: 31,
	writable: false,     // 不可写
	configurable: false  // 不可配置
});
console.log(myObject['FAVORITE NUMBER']); // 31
myObject['FAVORITE NUMBER'] = 100;
console.log(myObject['FAVORITE NUMBER']); // 31*/

// 2、禁止扩展
/*var myObject = {
	a: 2
};
Object.preventExtensions(myObject);
myObject.b = 3;
console.log(myObject.b); // undefined*/


// 3、密封
// Object.seal() 会创建一个“密封”的对象，调用Object.preventExtensions()
// 并把所有现有属性标记为configurable: false。所以密封之后不仅不能添加新
// 属性，也不能重新配置或者删除现有属性，但可以修改属性的值。
/*var myObject = {
	a: 2
};
Object.seal(myObject);  // 密封
myObject.a = 3;   // 密封后可以修改属性的值， 但不可配置
console.log(myObject.a); // 3
myObject.b = 1;   // 不可添加属性
console.log(myObject.b); // undefined
delete myObject.a;  // 不可删除属性
console.log(myObject.a); // 3*/


// 4、冻结
// Object.freeze() 会创建一个“冻结”的对象，调用Object.seal(),
// 并把所有“数据访问”属性标记为writable: false, 这样就无法修改它们的值。
/*var myObject = {
	a: 2
};
Object.freeze(myObject);  // 冻结
myObject.a = 3;    // 不可修改
console.log(myObject.a); // 2
myObject.b = 1;   // 不可添加属性
console.log(myObject.b); // undefined
delete myObject.a;  // 不可删除属性
console.log(myObject.a); // 2*/


/*var o = {};
var bValue;
Object.defineProperty(o, 'b', {
	get(){
		console.log('--get-->', bValue);
		return bValue;
	},
	set(newValue) {
		console.log('--set-->', newValue);
		bValue = newValue;
	},
	enumerable: true,
	configurable: true
});
o.b = 38;
console.log(o.b);*/

/*function Archiver(){
	var temperature = null;
	var archive = [];

	Object.defineProperty(this, 'temperature', {
		get(){
			console.log('get!');
			return temperature;
		},
		set(value){
			console.log('set: ', value);
			temperature = value;
			archive.push({val: temperature});
		}
	});

	this.getArchive = function(){
		return archive;
	}
}

var arc = new Archiver();
arc.temperature;
arc.temperature = 30;
arc.temperature = 31;
let result = arc.getArchive();
console.log(result);*/

/*
function myclass() {
}

Object.defineProperty(myclass.prototype, "x", {
	get() {
		console.log('get ');
		return this.stored_x;
	},

	set(x) {
		console.log('set ', x);
		this.stored_x = x;
	}
});

var a = new myclass();
var b = new myclass();
a.x = 2;
console.log(a.x);
console.log(b);
*/


/* 存在性 */
/*var myObject = {
	a: 2
};

("a" in myObject); // true， in 操作符会检查属性是是否在对象及其[[Prototype]]原型链中
("b" in myObject); // false
myObject.hasOwnProperty('a'); // true， hasOwnProperty()不会检查原型链
myObject.hasOwnProperty('b'); // false
// 注意* in 检测的是属性名是否存在，而不是属性的值*/


/*var arr = [1, 2, 3];
console.log( Object.keys(arr) );                // 只检查对象自身，不检查原型链，返回可枚举的
console.log( Object.getOwnPropertyNames(arr) ); */// 只检查对象自身，不检查原型链，返回所有，包括不可枚举的


/**
 * entries()
 */
/*const object1 = {
	a: 'somestring',
	b: 42
};
for (const key in object1){
	console.log(`${key}:${object1[key]}`);
}
for (const [key, value] of Object.entries(object1)){
	console.log(`${key}: ${value}`);
}*/
/*const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj));
var map = new Map(Object.entries(obj));
console.log(map);*/


/**
 * getOwnPropertyNames()
 */
/*var arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort());
var obj = { 0: "a", 1: "b", 2: "c"};
console.log(Object.getOwnPropertyNames(obj).sort());
console.log(Object.keys(arr));*/

/*
var target = myObject;
var enum_and_nonenum = Object.getOwnPropertyNames(target);
var enum_only = Object.keys(target);
var nonenum_only = enum_and_nonenum.filter( key => {
	var indexInEnum = enum_only.indexOf(key);
	if(indexInEnum === -1){
		return true;
	}else{
		return false;
	}
})*/


/**
 * getPrototypeOf()
 */
/*const prototype1 = {a: 0};
const object1 = Object.create(prototype1);

console.log(object1);
console.log(Object.getPrototypeOf(object1) === object1.__proto__);
console.log(Object.getPrototypeOf(object1) === prototype1);*/

/*console.log(Object.getPrototypeOf( Object ));
console.log(Object.getPrototypeOf( Object ) === Function.prototype);*/

/*var obj = new Object();
console.log(Object.getPrototypeOf(obj) === Object.prototype);
console.log(Object.getPrototypeOf(obj) === obj['__proto__']);
console.log(Object.getPrototypeOf( {} ) === Object.prototype);*/


