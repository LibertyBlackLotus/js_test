/**
 * scope 作用域与闭包
 */

/* LHS与RHS */
// RHS 查询与简单地查找某个变量的值别无二致，而LHS查询则是试图找到变量的
// 容器本身，从而可以对其赋值。从这个角度说，RHS并不是真正意义上的“赋值操作的右侧”，
// 更准确地说是“非左侧”。

// 例如
/*console.log(a);  // RHS
a = 2;  */         // LRS
// 在概念上最好将LRS/RHS理解为“赋值操作的目标是谁（LHS），以及”谁是赋值操作的源头（RHS)".

/*function foo(a){  //调用foo(2)时会隐式地给a分配值，a=2,这需要一次LHS询查
	console.log(a); //console.log() RHS查询
}
foo(2); //RHS  */



/* 变量提升 */
/*bla = 2;
var bla;
// implicitly 隐式地理解为
var bla;
bla = 2;*/

// 函数表达式不会提升
/*foo(); // 1
var foo;
function foo(){  //提升
	console.log(1);
}
foo = function(){ //不会提升
	console.log(2);
}*/

/*function doSomething(){
	console.log(bar);
	var bar = 111;
	console.log(bar);
}
doSomething();*/
// implicitly 隐式地理解为
/*function doSomething(){
	var bar;
	console.log(bar);
	bar = 111;
	console.log(bar);
}
doSomething();*/


/*var a = 'A';
var b = a;
// 相当于 var a, b = a = 'A';
console.log(a, b);

var x = y, y = 'A';
/!* 相当于
	var x, y;
	x = y;
	y = 'A';
* *!/
console.log(x + y); //undefinedA*/

/*var x = 0;  // x 是全局的
function f(){
	var x = y = 1;  // y也是全局的(隐式)
}
f();
console.log(x, y);  // 0, 1  能访问到全局的x, 访问不到 f 内部的x*/


/* 立即执行函数表达式 */
/*var a = 2;
(function foo(){  // 函数被当作表达式而不是一个声明来处理
	var a = 3;
	console.log(a);  // 3
})();
console.log(a);  // 2*/

// 这种形式也可以
/*var a = 2;
(function(){
	var a = 3;
	console.log(a);
}());
console.log(a);*/

// IIFE的另一个非常普遍的进阶用法是把它们当作函数调用并传递参数进去
/*var a = 2;
(function IIFE(global){
	var a = 3;
	console.log(a);  // 3
	console.log(global.a); // 2
})(window);
console.log(a); // 2*/

// IIFE还有一种变化的用途是倒置代码的运行顺序，
// 将需要运行的函数放在第二位，在IIFE执行之后当作参数传递进去。
/*var a = 2;
(function IIFE(def){
	def(window);
})(function def(global){
	var a = 3;
	console.log(a); // 3
	console.log(global.a); // 2
});*/


//始终给函数表达式命名是一个最佳实践
/*setTimeout(function(){
	console.log("I waited 1 second! ");
}, 1000);

setTimeout(function handler(){ // 我有名字了
	console.log("I waited 2 second! ");
	console.log(handler);
}, 2000);

setTimeout(handler = () => {
	console.log("I waited 3 second! ");
	console.log(handler);
}, 3000);*/


/* 隐式全局变量和外部函数作用域 */
/*var x = 0;
console.log(typeof z); // undefined

function a(){
	var y = 2;
	console.log(x, y); // 0 2

	function b(){
		x = 3;
		y = 4;
		z = 5;  // 隐式生成全局变量z并赋值
	}
	b();
	console.log(x, y, z); // 3 4 5
}
a();
console.log(x, z); // 3 5
console.log(typeof y); // undefined*/


/* let */
/*function varTest(){
	var x = 1;
	{
		var x = 2;
		console.log(x);
	}
	console.log(x);
}
varTest();

function letTest(){
	let x = 1;
	{
		let x = 2;
		console.log(x);
	}
	console.log(x);
}
letTest();

var a = 'global';   // 会给全局对象增加属性
let b = 'global';   // 不会增加全局对象属性
console.log(this.a);
console.log(this.b);*/

// 重复声明会报错
/*
if(x){
	let foo;
	let foo;  //报错
}
*/
/*if(y){
	{
		let foo;
	}
	{
		let foo;  // 不会报错
	}
}*/

// 暂存死区
/*function doSomething(){
	console.log(bar);  // undefined
	console.log(foo);  // ReferenceError
	var bar = 1;
	let foo = 2;
}
doSomething();*/

/*console.log(typeof undeclaredVariable);  // undefined
console.log(typeof i);  // ReferenceError
let i = 10;*/


/*
function test(){
	var foo = 33;
	if(foo){
		let foo = (foo + 55); // foo仍存在于暂存死区中
	}
}
test();
*/

/*function go(n){
	console.log(n);
	for(let n of n.a){ // n仍存在于暂存死区中
		console.log(n);
	}
}
go({a: [1, 2, 3]});*/


// const
/*const MY_FAV = 7;
if(MY_FAV === 7){
	let MY_FAV = 20;
	console.log('my favorite number is ' + MY_FAV);  // 20
	// var MY_FAV = 20;  // 报错
}
console.log('my favorite number is ' + MY_FAV);  // 7

// 常量可以定义成对象
const MY_OBJECT = {"key": "value"};
// MY_OBJECT = {"key": "otherValue"}; // 报错
// 对象属性并不在保护的范围内，下面这个声明会成功执行
MY_OBJECT.key = "otherValue";
console.log(MY_OBJECT);

// 也可以用来定义数组
const MY_ARRAY = [];
// MY_ARRAY = ['B'];  // 报错
MY_ARRAY.push('A');
console.log(MY_ARRAY);   */




/* 闭包 */
/*function foo(){
	var a = 2;

	function bar(){
		console.log(a);
	}

	return bar;
}
 
var baz = foo(); 
baz();*/

/*function foo(){
	var a = 2;

	function baz(){
		console.log(a);
	}

	bar(baz);
}

function bar(fn){
	fn();
}

foo();*/


/*var fn;

function foo(){
	var a = 2;

	function baz(){
		console.log(a);
	}

	fn = baz;
}

function bar(){
	fn();
}

foo();
bar();*/


/*function wait(message){
	setTimeout(function timer(){
		console.log(message);
	}, 1000);
}

wait('Hello, closure! ');*/


// 块作用域演变
/*for (var i = 1; i <= 5; i ++){
	(function(j){ 
		setTimeout(function timer(){
			console.log(j);
		}, j * 1000);	
	})(i);	
}*/
 
/*for (var i = 1; i <= 5; i ++){
	let j = i;
	setTimeout(function timer(){
		console.log(j);
	}, j * 1000);		
}*/

/*for (let i = 1; i <= 5; i ++){
	setTimeout(function timer(){
		console.log(i);
	}, i * 1000);		
}*/



// 模块 
/*function CoolModule(){
	var something = 'cool';
	var another = [1, 2, 3];

	function doSomething(){
		console.log(something);
	}

	function doAnother(){
		console.log(another.join(' ! '));
	}

	return {
		doSomething: doSomething,
		doAnother: doAnother
	};
}

var foo = CoolModule();
foo.doSomething();
foo.doAnother();*/


/*function CoolModule(id){
	function identify(){
		console.log(id);
	} 

	return {
		identify: identify
	};
}

var foo1 = CoolModule('foo 1');
var foo2 = CoolModule('foo 2');
foo1.identify();
foo.identify();*/


// 防抖
// 1
function debounce(fn, delay){
	var timer = null;
	return function(){
		if(timer){
			clearTimeout(timer);
		}
		timer = setTimeout(fn, delay);
	}	
}

// 2
const debounce2 = (function (){
	var timer = null;
	return function(fn, delay){
		if(timer){
			clearTimeout(timer);
		}
		timer = setTimeout(fn, delay);
	}
})();

// debounce2(function(){ console.log('debounce2 ');}, 1000);

//节流
// 1
function throttle(fn, delay){
	var canRun = true;
	return function(){
		if(!canRun) return;
		canRun = false;
		setTimeout(function(){
			fn();
			canRun = true;
		}, delay);
	}
}

//2
const throttle2 = (function(){
	var canRun = true;
	return function(fn, delay){
		if(!canRun) return;
		canRun = false;
		setTimeout(function(){
			fn();
			canRun = true;
		}, delay);
	}
})();
// throttle2(function(){console.log('throttle2');}, 1000);



// 块 Block {}
/*
var a = [];
for (var i = 0; i < 10; i ++){
	a[i] = function(){ console.log(i); };
}
a[0]();
a[1]();
a[2]();

let b = [];
for (let i = 0; i < 10; i ++){  // let在块作用域中可以强制更新变量
	b[i] = function(){ console.log(i); };
}
b[0]();
b[1]();
b[2]();*/

// function 声明
/*
foo('outside');
{
	function foo(location){
		console.log('foo is called ' + location);
	}
	foo('inside');
}
*/

/*function x(){
	y = 1;
	var z = 2;
}
x();
console.log(y);
console.log(z);*/

/*console.log(a);
console.log('still going...');*/
// 对比
/*console.log(a);
console.log('still going...');
var a;*/


/*var a = 1;
b = 2;
console.log(a);
console.log(b);
delete this.a;
delete this.b;
console.log(a);
console.log(b);*/

/*
function result(str){
	var arr = str.split('');
	console.log(arr);
	var res = [];
	for( let i = 0; i < arr.length; i ++){
		var count = 1;
		var index = res.indexOf(arr[i]);
		if(index === -1){
			res.push(arr[i]);
			res.push(count);
		}else{
			count ++;
			res[index + 1] = count;
		}
	}
	console.log(res);
	return res.join('_');
}

let test = 'offerofferzainaliiiiii';
let res = result(test);
console.log(res);
*/



