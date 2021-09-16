/**
 * es6 basic
 */

 /* 解构 */
/*  var o1 = { a: 1, b: 2, c: 3},
     a2 = [];

( { a: a2[0], b: a2[1], c: a2[2] } = o1 );
console.log(a2)	 

var x = 10, y = 20;
[y, x] = [x, y];
console.log(x, y);*/ 

/*解构 重复赋值 */
/* var o = { a: 1 };
var { a: X, a: Y } = o;
console.log(X, Y); */

/*解构 捕获子对象的值 */
/* var o = { a: { x: 1 } };
var { 
	a: { 
		x: X, 
		x: Y 
	}, 
	a 
} = o;
console.log(X, Y, a); */

/* 标签模板字面量 */
/* function foo(strings, ...values){
	console.log( strings );
	console.log( values );
}

var desc = "awesome";

foo `Everything is ${desc}!`; */