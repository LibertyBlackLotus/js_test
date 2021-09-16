/**
 * prototype
 */

/* 函数 */
// function doSomething(){}

// console.log( doSomething.prototype );
// console.log( doSomething.prototype.__proto__ === Object.prototype );

/*doSomething.prototype.foo = 'bar';
// console.log( doSomething.prototype );
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = 'some value';

console.log(doSomething);
console.log(doSomeInstancing);
console.log(doSomeInstancing.__proto__ === doSomething.prototype);
// console.log(Object.getPrototypeOf(doSomeInstancing) === doSomething.prototype);
console.log('doSomeInstancing.prop:   ' + doSomeInstancing.prop);
console.log('doSomeInstancing.foo:   ' + doSomeInstancing.foo);
console.log('doSomething.prop:   ' + doSomething.prop); // undefined
console.log('doSomething.foo:   ' + doSomething.foo);   // undefined
console.log('doSomething.prototype.prop:   ' + doSomething.prototype.prop); // undefined
console.log('doSomething.prototype.foo:   ' + doSomething.prototype.foo);*/



/* 继承方法 */
/*
var o = {
	a: 2,
	m: function(){
		// 当继承的函数被调用时， this 指向的是当前继承的对象，
		// 而不是继承的函数所在的原型对象
		return this.a + 1;
	}
}

console.log( o.m() ); //'this' 指向 o

var p = Object.create(o);
p.a = 4;
console.log( p.m() ); //'this' 指向 p
*/



/*var str1 = 'wanglin';
console.log(str1);

var str2 = new String('wanglin');
console.log(str2);
console.log(str2.valueOf());

let proto1 = Object.getPrototypeOf(str2);
let proto2 = String.prototype;
console.log(proto1 === proto2);*/


// inheritance
/*
function Person(name, age, sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
}
Person.prototype.sayHi = function(){
	console.log('Hi, I am ' + this.name);
}

function Student(name, age, sex, grade){
	Person.call(this, name, age, sex);

	this.grade = grade;

}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

console.log(Student.prototype.constructor);
let s1 = new Student('wanglin', 18, 'man', 10);
console.log(s1);
s1.sayHi();
*/

/*function Car(color){
	this.color = color;
}
Car.prototype.run = function(){
	console.log('I an running, ', this.color );
}

function Bus(color, wheels){
	Car.call(this, color);

	this.wheels = wheels;
}
Bus.prototype = Object.create(Car.prototype);
Bus.prototype.constructor = Bus;



console.log(Bus.prototype);
var bus = new Bus('blue', 8);
console.log(bus);
bus.run();*/


/*var anotherObject = {
	a: 2
};

var myObject = Object.create(anotherObject);

console.log(anotherObject.a);
console.log(myObject.a);

console.log(anotherObject.hasOwnProperty('a'));
console.log(myObject.hasOwnProperty('a'));

myObject.a ++;

console.log(anotherObject.a);
console.log(myObject.a);
console.log(myObject.hasOwnProperty('a'));*/

/*function Foo(name){
	this.name = name;
}

Foo.prototype.myName = function(){
	return this.name;
};

function Bar(name, label){
	Foo.call(this, name);

	this.label = label;
}

// Bar.prototype = Object.create(Foo.prototype);
Object.setPrototypeOf(Bar.prototype, Foo.prototype);
Bar.prototype.myLabel = function(){
	return this.label;
};

var a = new Bar("a", "obj a");

a.myName();
a.myLabel();*/


/*function Foo(){

}

Foo.prototype.blah = '';

var a = new Foo();

console.log( a instanceof Foo);
console.log(Object.getPrototypeOf(a) === Foo.prototype);


// .__proto__ 大致实现
Object.defineProperty(Object.prototype, "__propto__", {
	get: function(){
		return Object.getPrototypeOf(this);
	},
	set: function(o){
		Object.setPrototypeOf(this, o);
		return o;
	}
})


// Object.create() polyfill
if( !Object.create ){
	Object.create = function(o){
		function F(){}
		F.prototype = o;
		return new F();
	}
}
*/


// 委托
/*
const Task = {
	setID: function(ID){ this.id = ID },
	outputID: function(){
		console.log(this.id);
	}
};

var XYZ = Object.create(Task);
console.log(XYZ);
XYZ.prepareTask = function(ID, Label){
	this.setID(ID);
	this.label = Label;
};

XYZ.outputTaskDetails = function(){
	this.outputID();
	console.log(this.label);
};
*/


/*function Person() {}
const tom = new Person();

console.log( tom.__proto__ );
console.log( tom.__proto__ === Person.prototype );
console.log( Person.prototype.__proto__ );
console.log( Person.prototype.__proto__ === Object.prototype );
console.log( Object.prototype.__proto__ );*/


/*let f = function(){
	this.a = 1;
	this.b = 2;
}

let o = new f();*/

// f.prototype.b = 3;
// f.prototype.c = 4;

/*console.log(o.__proto__);
console.log(f.prototype);
console.log(o.constructor.prototype);
console.log(o.__proto__ === f.prototype );
console.log(o.__proto__ === o.constructor.prototype); // true

console.log(f.prototype.__proto__ === Object.prototype);
console.log(o.__proto__.__proto__ === Object.prototype );
console.log( o.__proto__.__proto__.__proto__ );

console.log(o.a);
console.log(o.b);  // 属性遮蔽  自身属性遮蔽原型链上的属性
console.log(o.c);  // 原型链上的属性
console.log(o.d);  // 原型链上没有  返回 undefined*/



/*var o = { a: 1 };
// 原型链 o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];
// 原型链 a ---> Array.prototype ---> Object.prototype ---> null

function f(){
	return 2;
}
// 原型链 f ---> Function.prototype ---> Object.prototype ---> null*/ 

/* 拓展原型链的方法 */
// 1、 New-initialization
/*function foo(){}
foo.prototype = {
	foo_prop: 'foo val'
};

function bar(){}

var proto = new foo;
proto.bar_prop = 'bar val';

bar.prototype = proto;
var inst = new bar;
console.log(inst.foo_prop);
console.log(inst.bar_prop);*/


// 2、 Object.create
/*function foo(){}
foo.prototype = {
	foo_prop: "foo val"
};

function bar(){}

var proto = Object.create(foo.prototype);
proto.bar_prop ='bar val';

bar.prototype = proto;

var inst = new bar;
console.log(inst.foo_prop);
console.log(inst.bar_prop);*/


// 3、 Object.setPrototypeOf
/*
function foo(){}
foo.prototype = {
	foo_prop: "foo val"
};
function bar(){}
var proto;
proto = Object.setPrototypeOf(
	{bar_prop: 'bar val'},
	foo.prototype
);

bar.prototype = proto;
var inst = new bar;
console.log(inst.foo_prop);
console.log(inst.bar_prop)*/

//4、 __proto__



/* prototype 与 Object.getPrototypeOf */
/*function Foo(){}
var o = new Foo();
// 相当于
var o = new Object();
o.__proto__ = Foo.prototype;
Foo.call(o);*/



/*
function Person(name, age, sex){
	this.name = name;
	this.age = age;
	this.sex = sex;
}

let person1 = new Person('wanglin', '33', 'male');

console.log( person1.constructor === Person );
let person2 = new person1.constructor('shaowen', '27', 'female');
console.log(person2);
console.log(person2.constructor);
console.log(person2.constructor === Person);
*/


/* Object.create() polyfill  */
/*if( !Object.create ){
	Object.create = function(o){
		function F(){}
		F.prototype = o;
		return new F();
	};
}*/
