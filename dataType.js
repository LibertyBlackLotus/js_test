/**
data type
*/
console.log('data type')
/* 
let arr = [1, 2, 3, 4, 5]

let test = arr.slice(-2)
console.log(test) */

/* let a = 'foo'
let b = ['f', 'o', 'o'] */
/* console.log(a.join)
console.log(a.map)
var c = Array.prototype.join.call(a, '-')
console.log(c)
var d = Array.prototype.map.call(a, item => {
    return item.toUpperCase()
}).join('.')
console.log(d)
var e = [].join.call(a.toUpperCase(), '.')
console.log(e) 
 
console.log(b.reverse())
console.log(Array.prototype.reverse.call(a)) */
/* var f = a.split('').reverse().join('')
console.log(f) */


/* console.log(Number.isInteger(42))
console.log(Number.isInteger(42.000))
console.log(Number.isInteger(42.123))

var x = 42
console.log(void x, x) */

/* let a = 2 / 'foo'
let b = 'foo'

console.log(Number.isNaN(a))
console.log(Number.isNaN(b)) */

/* let a = 2;
let b = a;

b ++;
console.log(a)
console.log(b)

let c = [1, 2, 3];
let d = c;
d.push(4)
console.log(c)
console.log(d) */

// 值与引用
/* let a = [1, 2, 3];
let b = a;
console.log(a)
console.log(b)

b = [4, 5, 6]
console.log(a)
console.log(b) */

// console.log( Object.prototype.toString.call( [1, 2, 3] ) )
// console.log( Object.prototype.toString.call( null ) )

/* let a = 'abc'
console.log(a.length) */

// 封装对象
/* let a = new Boolean( false )
console.log(a)
if( !a ){
    console.log('Oops')
} */

/* let a = 'abc';
let b = new String( a );
let c = Object( a );

console.log( typeof a )
console.log( typeof b )
console.log( typeof c )

console.log( b instanceof String )
console.log( c instanceof String )
console.log( Object.prototype.toString.call(b) )
console.log( Object.prototype.toString.call(c) ) */

// 拆封
/* let a = new String('abc')
let b = new Number( 42 )
let c = new Boolean( true )

console.log( a.valueOf() )
console.log( b.valueOf() )
console.log( c.valueOf() ) */


/* let a = new String('abc')
let b = a + ""
console.log( typeof a )
console.log( typeof b ) */

/* console.log( Date.now() )
console.log( Date() )
console.log( new Date() )
console.log( (new Date()).getTime() ) */

//原生原型
/* let test = 'abcdef'
console.log( test.indexOf('b') )
console.log( String.prototype.indexOf.call(test, 'b') )  */
