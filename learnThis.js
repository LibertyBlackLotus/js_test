
/**
this
*/
/*
function identify(){
	return this.name.toUpperCase();
}

function speak(){
	var greeting = "Hello, I'm " + identify.call(this);
	console.log(greeting);
}

var me = {
	name: "Wanglin"
};

var you = {
	name: "Reader"
};

identify.call(me);
identify.call(you);

speak.call(me);
speak.call(you);
*/
/*function foo(num){
	console.log("foo: " + num);

	this.count++;
}

foo.count = 0;

var i;
for(i = 0; i < 10; i ++){
	if(i > 5){
		foo.call(foo, i);  // 确保 函数foo中的this 指向foo
	}
}

console.log(foo.count);*/

/*function foo(){
	var a = 2;
	this.bar();
}

function bar(){
	console.log(this.a);  // this 无法访问词法作用域
}

foo();*/


//调用栈 
/*
function baz(){
	console.log('baz'); 
	bar();
}

function bar(){
	console.log('bar'); 
	foo();
}

function foo(){
	console.log('foo');  
}

baz();
*/

/* 绑定this 的几种方式  */

/* 1、默认绑定 */
/*function foo(){
	console.log(this.a);
}

var a = 2;
foo();  // 2 */

/* 2、隐式绑定 */
/*function foo(){
	console.log(this.a);
}

var obj2 = {
	a: 42,
	foo: foo
};

var obj1 = {
	a: 2, 
	obj2: obj2
};

obj1.obj2.foo(); */ //对象属性引用链中只有上一层或者说最后一层在调用位置中起作用

/* 隐式丢失 */
//案例1
/*function foo(){
	console.log(this.a);
}

var obj = {
	a: 2,
	foo: foo
};

var bar = obj.foo;  // bar 引用 foo函数
var a = 'oops, global';
bar(); 	    // 'oops, global'  调用位置为全局
obj.foo();  // 2*/

// 案例2
/*function foo(){
	console.log(this.a);
}

function doFoo(fn){
	fn(); // 调用位置
}

var obj = {
	a: 2,
	foo: foo
};

var a = 'oops, global';
doFoo(obj.foo);  // 'oops, global'*/



/* 3、显式绑定 */
// 1）、硬绑定
/*function foo(){
	console.log(this.a);
}

var obj = {
	a: 2
};

var bar = function(){
	foo.call(obj);
};
var a = 100;

bar();  // 2
setTimeout(bar, 100); // 2

bar.call(window); // 2  硬绑定的bar 不可能再修改它的 this*/

// 硬绑定典型应用场景， 创建一个包裹函负责接收参数并返回值
/*function foo(something){
	console.log(this.a, something);
	return  this.a + something;
}

var obj = {
	a: 2
};

var bar = function(){
	return foo.apply(obj, arguments);
};

var b = bar(3); // 2 3
console.log(b); // 5*/


// 另一种场景是创建一个可以重复使用的辅助函数
/*function foo(something){
	console.log(this.a, something);
	return  this.a + something;
}

function bind(fn, obj){
	return function(){
		return fn.apply(obj, arguments);
	};
}

var obj = {
	a: 2
};
var bar = bind(foo, obj);*/

// 2）、API调用的上下文
/*
function foo(el){
	console.log(el, this.id);
}

var obj = {
	id: 'awesome'
};

[1, 2, 3].forEach(foo, obj);
*/


/* 4、new 绑定 */
/*function foo(a){
	this.a = a;
}
var bar = new foo(2);
// 使用new来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。
// 1）、创建（或者说构造）一个全新的对象；
// 2）、这个新对象会被执行[[Prototype]]连接；
// 3）、这个新对象会绑定到函数调用的this；
// 4）、如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象。
console.log(bar.a);*/



/* 优先级 */

/* 显式绑定 VS 隐式绑定 */
/*function foo(){
	console.log(this.a);
}

var obj1 = {
	a: 2,
	foo: foo
};

var obj2 = {
	a: 3,
	foo: foo
};

obj1.foo(); // 2
obj2.foo(); // 3
obj1.foo.call(obj2); // 3
obj2.foo.call(obj1); // 2
//结论：显式绑定优先级高于隐式绑定*/


/* new绑定 VS 隐式绑定 */
/*function foo(something){
	this.a = something;
}

var obj1 = {
	foo: foo
};

var obj2 = {};

obj1.foo(2);
console.log(obj1.a); // 2

obj1.foo.call(obj2, 3);
console.log(obj2.a); // 3

var bar = new obj1.foo(4);
console.log(obj1.a); // 2
console.log(bar.a);  // 4
// 结论：new绑定高于隐式绑定*/
 

/* new绑定 VS 显式绑定 */
/*function foo(something){
	this.a = something;
}

var obj1 = {};
var bar = foo.bind(obj1);
bar(2);
console.log(obj1.a);  // 2

var baz = new bar(3);
console.log(obj1.a);  // 2
console.log(baz.a);   // 3
// 结论：new 会创建新对象，并绑定this到新对象*/


/* 部分应用  柯里化的一种 */
// 1)
/*function foo(a, b){
	console.log("a: " + a + ", b:" + b);
}

foo.apply(null, [2, 3]);

var bar = foo.bind(null, 2);
bar(3);*/

// 2)
/*function foo(p1, p2){
	this.val = p1 + p2;
}

var bar = foo.bind(null, 'p1');
var baz = new bar('p2');
baz.val;*/


/* 判断 this的步骤 */
// 1) 函数是否在new中调用(new绑定)? 如果是的话this绑定的是新创建的对象。
//var bar = new foo();

// 2)函数是否通过call、apply（显示绑定)或者硬绑定调用？如果是的话，this绑定的是指定的对象。
//var bar = foo.call(obj2);

// 3) 函数是否在某个上下文对象中调用（隐式绑定)?如果是的话，this绑定的是那个上下文对象。
//var bar = obj1.foo();

// 4) 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到undefined,否则绑定到全局对象。
// var bar = foo();

//但凡事总有例外
/*function foo(){
	console.log(this.a);
}

var a = 2;
// 向call、apply、bind 传入null或者undefined作为this的绑定对象，
// 这些值在调用时会被忽略，实际应用的是默认绑定规则。
foo.call(null); // 2
*/


/* 更安全的this */
/*function foo(a, b){
	console.log("a: " + a + ", b:" + b);
}

var _ = Object.create(null);

foo.apply(_, [2, 3]);

//柯里化
var bar = foo.bind(_, 2);
bar(3);*/

/* 间接引用 *
/*function foo(){
	console.log(this.a);
}

var a = 2;
var o = { a: 3, foo: foo};
var p = { a: 4};

o.foo();
(p.foo = o.foo)();*/

/* 柯里化参数复用 */
/*var multi = (a, b, c) => a * b * c;
function curry(fn){
	var args = [];
	// arguments 为类数组，但除了length属性外，没有其他Array方法
	// 可以使用如下方式转换为数组：
	// Array.prototype.slice.call(arguments)  但这种方式会阻止javascript引擎优化
	// 建议采用如下方式进行转换：
	// var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments)
	return function cb(){
		if(arguments.length === 0){
			// return fn.apply(null, args); // 法一
			return fn(...args);             // 法二
		}
		// args.push(...Array.from(arguments));     // 法一
		[].push.apply(args, Array.from(arguments)); // 法二
		return cb;
	}
}
let myMulti = curry(multi);
console.log(myMulti);
let result = myMulti(2)(3)(4)();
console.log(result);*/


//箭头函数的词法
/*function foo(){
	return (a) => {
		console.log(this.a);
	};
}

var obj1 = {
	a: 2
};

var obj2 = {
	a: 3
};

//foo()内部创建的箭头函数会捕获调用时foo()的this。
//由于foo()的this绑定到obj1, bar（引用箭头函数）
//的this也会绑定到obj1，箭头函数的绑定无法被修改(new 也不行)。
var bar = foo.call(obj1);
bar.call(obj2); // 2， 不是 3
*/

/*function foo(){
	setTimeout( () => {
		console.log(this.a);
	}, 100);
}

var obj = {
	a: 2
};
foo.call(obj); // 2 */

