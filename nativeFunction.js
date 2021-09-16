
/**
native function
*/

/*var a = new String('abc');

console.log(a);
console.log( typeof a);
console.log( a instanceof String );
console.log( Object.prototype.toString.call(a) );

console.log( "abc".toString() );
console.log( Object.prototype.toString.call("abc") );*/

/*
var a = new Boolean( false );
console.log(!a );
if( !a ){
	console.log('hahaha');
}*/


/*var a = new String( "abc" );
var b = new Number( 42 );
var c = new Boolean( true );

console.log( a.valueOf() );
console.log( b.valueOf() );
console.log( c.valueOf() );*/


/*var a = new Array(3);
var b = [ undefined, undefined, undefined];
var c = [];
c.length = 3;

console.log(a);
console.log(b);
console.log(c);
*/ 

/*var a = "0";
var b = [];
var c = {};

var d = "";
var e = 0;
var f = null;
var g;

console.log( Boolean(a) );
console.log( !! a );
console.log( Boolean(b) );
console.log( Boolean(c) );

console.log( Boolean(d) );
console.log( Boolean(e) );
console.log( Boolean(f) );
console.log( Boolean(g) );
*/

/*var a = "42";
var b = "0";

var c = 42;
var d = 0;

console.log(  a + b );
console.log( typeof (a + b) );
console.log( c + d );

var f = [1, 2];
var g = [3, 4];
console.log(f + g);
*/


/*var a = {
	valueOf(){return 42;},
	toString(){ return 4; }
}

console.log(a + "");
console.log( String(a) );*/


/*var a = 42;
var b = null;
var c = "foo";

if(a && (b || c)){
	console.log( "yep" );
}
*/

/*var s1 = Symbol( "cool" );
console.log( String(s1) );

var s2 = Symbol( "not cool" );
console.log( s2 + "" );*/
/*
var a = 42;
var b = [ 42 ];
console.log(a == b);*/


/*var a = "abc";
var b = Object( a );

console.log(a === b);
console.log(a == b);

console.log( NaN == NaN);*/

/*console.log( "0" == false);
console.log( "" == false);
console.log( false == [] );
console.log( "" == [] );
console.log( 0 == [] );
console.log( "" == 0 );

console.log( +"" );
console.log( +[] ); 
console.log( "true" == true );*/

/*var a = { b: 42 };
var b = { b: 43 };
console.log( String(a) );
console.log( a.toString() );*/