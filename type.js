
//假值
/*
undefined, null, false, -0, +0, NaN, ""
*/

/* var a = new Boolean( false )
var b = new Number( 0 )
var c = new String( "" )

console.log(a && b && c)
var d = Boolean( a && b && c )
console.log(d)
 */

//真值
// 不在假值列表里的值都是真值
/* var a = 'false'
var b = '0'
var c = "''"

console.log(a && b && c)
var d = Boolean( a && b && c )
console.log(d)

if(false){
	console.log('ooo')
}

if('false'){
	console.log('ppp')
}

var e = []
var f = {}
var g = function(){}

var h = Boolean( e && f && g)
console.log(h) */


//显示强制类型转换
/* var a = [1, 2, 3]
console.log( a.toString() ) */

// JSON字符串化
/* console.log( JSON.stringify(42) )
console.log( JSON.stringify('42') )
console.log( JSON.stringify(null) )
console.log( JSON.stringify(true) )

console.log( JSON.stringify( undefined ) )
console.log( JSON.stringify( function(){} ) )
console.log( typeof JSON.stringify( undefined ) )

console.log( JSON.stringify(
	[1, undefined, function(){}, 4 ]
) )

console.log( JSON.stringify(
	{ a : 2, b: function(){} }
) ) */

//字符串和数字转换
/* var a = 42;
var b = String(a);
var c = "3.14";
var d = Number( c );
var e = +c;

console.log(b)
console.log(typeof b)
console.log(d)
console.log(typeof d)
console.log(e)
console.log(typeof e) */

/* var d = new Date()
console.log(d)
console.log(+d)

var timestamp = +new Date()
console.log(timestamp)

var timestamp1 = Date.now()
console.log(timestamp1)

// Date.now() polyfill
if(! Date.now ){
  Date.now = function(){
	return +new Date();
  }
} */

// best practice
//使用Date.now() 获取当前时间戳，
//使用 new Date(..).getTime()获得指定时间的时间戳
//不建议对日期类型使用强制类型转换，


// ~ 操作符
/* var a = "Hello World"
console.log( ~a.indexOf('lo') )   //打到匹配 真值 
console.log(! ~a.indexOf('ol') )   //没找到匹配 假值*/


//解析数字字符串
/* var a = '42';
var b = '42px';
console.log( Number(a) )
console.log( parseInt(a) )
console.log( Number(b) )
console.log( parseInt(b) ) */


//显示转换为布尔值
/* var a = '0';
var b = [];
var c = {};

var d = '';
var e = 0;
var f = null;
var g; 

console.log( Boolean(a) )
console.log( Boolean(b) )
console.log( Boolean(c) )

console.log( Boolean(d) )
console.log( Boolean(e) )
console.log( Boolean(f) )
console.log( Boolean(g) ) 

console.log( !! a )
console.log( !! b )
console.log( !! c )

console.log( !! d )
console.log( !! e )
console.log( !! f )
console.log( !! g )  */
// best practice 
// 建议使用Boolean(..)或!!来进行显示转换以让代码更清晰


//隐式强制类型转换

//字符串和数字之间的隐式强制类型转换
/* var a = '42'
var b = '0'
var c = 42;
var d = 0;

console.log( a + b )
console.log( c + d ) */

/* var a = [1, 2]
var b = [3, 4]
console.log( a + b ) */

/* var a = '3.14'
var b = a -0;
console.log( b ) */

//布尔值与数字的隐式强制类型转换
/* var a = 42;
var b = 'abc';
var c;
var d = null;

if(a){
	console.log('yep')
}
if(c){
	console.log('nope, never runs')
}

c = d ? a : b;
console.log( c )

if( (a && d) || c ){
	console.log('yep')
} */


// ||与&&, 选择器运算符，返回两个操作数中的一个（且仅一个）
/* var a = 42;
var b = 'abc';
var c = null;

console.log( a || b )
console.log( a && b )
console.log( c || b )
console.log( c && b )

console.log( !! (a || b) ) */

//其他类型与布尔类型的相等比较
/* var a = '42'
var b = true
console.log( a == b ) */
//best practice 建议无论什么情况下都不要使用 ==true和==false
//使用 !!或Boolean()进行显示的类型转换之后再做判断


//null与undefined之前的相等比较
//(1)如果x为null, y为undefined，则结果为true
//(2)如果x为undefined, y为null，则结果为true
/* var a = null;
var b;

console.log( a == b )
console.log( b == a )
console.log( a == null )
console.log( b == null )

console.log( a == false )
console.log( b == false )
console.log( a == "" )
console.log( b == "" )
console.log( a == 0 )
console.log( b == 0 ) */

console.log( "0" == false ) 
console.log( false == 0 ) 





