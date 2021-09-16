
/**
 grammar
 */
//注意区分词法syntax与语法的区别

/* function foo(){
 	a = a + 1;
 }

 var a = 1;

 foo();*/


 /*var a = 42;
 console.log(a++);
 var b = a++;

 console.log(a);
 console.log(b);

 console.log( [] + {} );
 console.log( {} + [] );*/

// for...in...
/*
var obj = {a:1, b:2, c:3};

for (var prop in obj){
	console.log("obj." + prop + "=" + obj[prop]);
}
*/

/*
var triangle = {a: 1, b: 2, c: 3};
function ColoredTriangle() {
	this.color = 'red';
}
ColoredTriangle.prototype = triangle;

var object = new ColoredTriangle();
for (var prop in object){
	console.log(`obj.${prop} = ${object[prop]}`);
}
for (var prop in object){
	if(object.hasOwnProperty(prop)){ // 只显示自身属性，不显示prototype链上的属性
		console.log(`obj.${prop} = ${object[prop]}`);
	}
}
*/


/* for...of */
/*(function(){
	console.log(arguments);
	for (let argument of arguments){
		console.log(argument);
	}
})(1, 2, 3);*/

/*function* fibonacci(){
	let [prev, curr] = [0, 1];
	for(;;){
		[prev, curr] = [curr, prev + curr];
		yield curr;
	}
}

for (let n of fibonacci()){
	console.log(n);
	if(n > 100){
		break;
	}
}*/

// 不要重用生成器
/*var gen = (function *(){
	yield 1;
	yield 2;
	yield 3;
})();

for (let o of gen) {
	console.log(o);
	break; //关闭生成器
}

//生成器不应该重用，以下没有意义！
for (let o of gen) {
	console.log(o);
}*/

/* for...in 与 for...of 区别 */
/*Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};
let iterable = [3, 5, 7];
iterable.foo = 'hello';
Object.defineProperty(iterable, '3', {
	value: 'world',
	enumerable: true
});*/

/*
for (let i in iterable){
	console.log(i);
}
*/

/*
for (let i in iterable){
	if (iterable.hasOwnProperty(i)){
		console.log(i);
	}
}
*/
/*console.log(iterable);
for (let i of iterable){
	console.log(i);
}*/

// 每次循环重新声明
/*{
	let j;
	for (j = 0; j < 10; j ++){
		let i = j;
		console.log(i);
	}
}*/

// 声明提升
/*
foo();  // TypeError

var foo = function bar(){

}
*/

// 表达式不会提升
/*foo(); // TypeError
bar(); // ReferenceError
var foo = function bar(){}

// 相当于

var foo;
foo();
bar();
foo = function bar(){}*/

// 函数优先提升
/*foo();
var foo;
function foo(){
	console.log(1);
}
foo = function(){
	console.log(2);
}

// 相当于

function foo(){
	console.log(1);
}
foo(); // var foo; 重复声明 ，被忽略
foo = function(){
	console.log(2);
}*/



//运算符优先级
/* var a = 42, b;
b = ( a++, a );
console.log(a);
console.log(b);
// 如果去掉()
var a = 42, b;
b = a++, a;
console.log(a);
console.log(b); */




