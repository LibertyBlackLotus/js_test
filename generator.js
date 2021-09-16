
/**
 * generator
 */

const { request } = require("http");

 
/*function *gen(){
	yield 10;
	x=yield 'foo';
	yield x;
}
var genObj = gen();
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next(100));
console.log(genObj.next());*/

/*function* anotherGenerator(i) {
	yield i + 1;
	yield i + 2;
	yield i + 3;
}

function* generator(i){
	yield i;
	yield* anotherGenerator(i);// 移交执行权
	yield i + 10;
}

var gen = generator(10);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);*/
/*
function* createIterator(){
	let first = yield 1;
	let second = yield first + 2;
	yield second + 3;
}
let iterator = createIterator();
console.log(iterator.next());
console.log(iterator.next(1));
console.log(iterator.next(2));
console.log(iterator.next());*/

/*function* yieldAndReturn(){
	yield 'Y';
	return 'R';
	yield 'unreachable';
}
var gen = yieldAndReturn();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());*/

/*function* iterArr(arr){
	if(Array.isArray(arr)){
		for(let i = 0; i < arr.length; i ++){
			yield* iterArr(arr[i]);
		}
	}else{
		yield arr;
	}
}
var arr = ['a', ['b', 'c'], ['d', 'e']];
var arr2 = [ 'a', ['b',[ 'c', ['d', 'e']]]];
let result = iterArr(arr);
let result2 = iterArr(arr2);
console.log([...result]);
console.log([...result2]);*/


/* var x = 1;
function *foo(){
	x++;
	yield;
	console.log( "x:", x);
}

function bar(){
	x++;
}

var it = foo();
it.next();
console.log( "x:", x);
bar();
console.log( "x:", x);
it.next(); */


/* function *foo(x, y){
	return x * y;
}

var it = foo(6, 7);
console.log(it);
var res = it.next();
console.log(res.value); */


/* 迭代消息传递 */
/* function *foo(x){
	var y = x * (yield 'Hello');
	return y;
}

var it = foo( 6 ); 
var res = it.next();
console.log( res );
res = it.next( 7 );
console.log( res.value );  */


/* 多个迭代器交互 */
/* function *foo(){
	var x = yield 2;
	z++;
	var y = yield (x * z);
	console.log(x, y, z);
}

var z = 1;
var it1 = foo();
var it2 = foo();

var val1 = it1.next().value;
console.log(val1);
var val2 = it2.next().value;
console.log(val2);

val1 = it1.next( val2 * 10 ).value;
console.log(val1);
val2 = it2.next( val1 * 5 ).value;
console.log(val2);

let res1 = it1.next( val2 / 2 );
console.log(res1)
let res2 = it2.next( val1 / 4 );
console.log(res2) */


/* 迭代器 闭包版本 */
/* var gimmeSomething = (function(){
	var nextVal;

	return function(){
		if(nextVal === undefined){
			nextVal = 1;
		}else{
			nextVal = (3 * nextVal) + 6;
		}	
		return nextVal;
	}
})();

console.log( gimmeSomething() );
console.log( gimmeSomething() );
console.log( gimmeSomething() ); */


/* 标准迭代器接口 */
/* var something = (function(){
	var nextVal;

	return {
		[Symbol.iterator]: function(){
			return this;
		},

		next: function(){
			if(nextVal === undefined){
				nextVal = 1;
			}else{
				nextVal = (3 * nextVal) + 6;
			}
			return { done: false, value: nextVal};
		}
	}
})();

console.log(something.next());
console.log(something.next());
console.log(something.next());  */ 


/* iterator */
/* var a = [1, 3, 5, 7, 9];
var it = a[Symbol.iterator]();
console.log(it)
console.log( it.next().value )
console.log( it.next().value )
console.log( it.next().value )
console.log( it.next().value ) */


/* 异步迭代生成器 */
/* function foo(x, y, cb){
	ajax(`http://some.url.1/?x=${x}&y=${y}`,
	function(err, data){
		if(err){
			it.throw(err);
		}else{
			it.next(data);
		}
	});
}
function *main(){
	try{
		var text = yield foo( 11, 32 );
		console.log( text );
	}catch(err){
		console.error(err);
	}
}
var it = main();
it.next(); */


/* generator + promise */
/* function foo(x, y){
	return request(`http://some.url.1/?x=${x}&y=${y}`)
}

function *main(){
	try{
		var text = yield foo( 11, 32 );
		console.log( text );
	}catch(err){
		console.error(err);
	}
}
var it = main();
var p = it.next().value;
p.then(function(text){
	it.next(text);
},
function(err){
	it.throw(err);
}); */




/* yield 委托 */
/*function *foo(){
	console.log(" *foo() starting ");
	yield 3;
	yield 4;
	console.log(" *foo() finished ");
}

function *bar(){
	yield 1;
	yield 2;
	yield *foo(); //yield 委托
	yield 5;
}

var it = bar();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);*/


/*
function *foo(){
	console.log("inside *foo():", yield "B");
	console.log("inside *foo():", yield "C");
	return "D";
}

function *bar(){
	console.log("inside *bar():", yield "A");
	console.log("inside *bar():", yield *foo() );
	console.log("inside *bar():", yield "E" );
	return "F";
}

var it = bar();

console.log( "outside:", it.next() );
console.log( "outside:", it.next(1).value );
console.log( "outside:", it.next(2).value );
console.log( "outside:", it.next(3).value );
console.log( "outside:", it.next(4).value );*/


/*
function* gen(){
	yield* ['a', 'b', 'c'];
}
let it = gen();
console.log(it.next());
console.log(it.next());
console.log(it.next());*/

// yield代理 返回参数
/*function* foo(){
	yield 2;
	yield 3;
	return "foo";
}

function* bar(){
	yield 1;
	var v = yield* foo();
	console.log("v: " + v);
	yield 4;
}

var it = bar();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());*/

/*function* genFuncWithReturn() {
	yield 'a';
	yield 'b';
	return 'The result';
}

function* logReturned(genObj){
	let result = yield* genObj;
	console.log(result);
}

[...logReturned(genFuncWithReturn())];*/


// 使用yield* 迭代读取嵌套数组值
/*function* iterTree(tree){
	if(Array.isArray(tree)){
		for(let i = 0; i < tree.length; i ++){
			yield* iterTree(tree[i]);
		}
	}else{
		yield tree;
	}
}

const tree = [ 'a', ['b', 'c'], ['d', 'e'] ];
for(let x of iterTree(tree)){
	console.log(x);
}
console.log([...iterTree(tree)]);*/


// Generator 与状态机
/*var ticking = true;
var clock = function(){
	if(ticking){
		console.log('Tick!');
	}else{
		console.log('Tock!');
	}
	ticking = !ticking;
};

var clockGen = function* (){
	while(true){
		console.log('Tick!');
		yield;
		console.log('Tock!');
		yield;
	}
};

let it = clockGen();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());*/


// 模拟获取接口任务
/*
var fetch = require('node-fetch');

function* gen(){
	var url = 'https://api.github.com/users/github';
	var result = yield fetch(url); //@result
	console.log(result.bio);
}

var g = gen();
var result = g.next();
result.value.then( data => {
	return data.json();
}).then( data => {
	g.next(data);  //传入值给@result
});
*/


/*
 传统thunk 函数
 */
/*
function f(m){
	return m * 2;
}
f(x + 5);

// 等同于
var thunk = function(){ // 此函数为thunk函数
	return x + 5;
}
function f(thunk){
	return thunk() * 2;
}

*/

// js 里的 thunk 函数
//正常版本的readFile（多参数）
/*var fs = require('fs');
fs.readFile(fileName, callback);

//Thunk 版本的readFile（单参数）
var Thunk = function(fileName){
	return function(callback){
		return fs.readFile(fileName, callback);
	}
};

var readFileThunk = Thunk(fileName);
readFileThunk(callback);*/

/**
 * 基于 thunk 的generator 执行器
 */
/*function run(fn){
	var gen = fn();
	function next(err, data){
		var result = gen.next(data);
		if(result.done) return;
		result.value(next);
	}
	next();
}

function* g(){
	// ...
}

run(g);*/





