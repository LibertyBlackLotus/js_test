/*
** entrust 行为委托
 */

/* 面向委托 */
/*Task = {
	setID: function(ID){ this.id = ID; },
	outputID: function(){ console.log(this.id); }
};

// 让XYZ 委托Task
XYZ = Object.create(Task);
XYZ.prepareTask = function(ID, Label){
	this.setID(ID);   // 触发隐式绑定
	this.label = Label;
};
XYZ.outputTaskDetails = function(){
	this.outputID();
	console.log(this.label);
};

XYZ.prepareTask('wanglin', 'engineer')
XYZ.outputTaskDetails();*/


/* 对象关联风格 */
/*
Foo = {
	init: function(who){
		this.me = who;
	},
	identify: function(){
		return "I am " + this.me;
	}
};
Bar = Object.create(Foo);

Bar.speak = function(){
	console.log("Hello, " + this.identify() + ".");
};

var b1 = Object.create(Bar);
b1.init("b1");
var b2 = Object.create(Bar);
b2.init("b2");

b1.speak();
b2.speak();*/


/* 更简洁的语法 es6 */
/*var LoginController = {
	// ...
};
var AuthController = {
	errors: [],
	checkAuth(){
		//...
	},
	server(url, data){
		//...
	}
};
Object.setPrototypeOf(AuthController, LoginController);*/

// 由于现代 JavaScript 引擎优化属性访问所带来的特性的关系，
// 更改对象的 [[Prototype]]在各个浏览器和 JavaScript 引擎上都是一个很慢的操作。
// 其在更改继承的性能上的影响是微妙而又广泛的，
// 这不仅仅限于 obj.__proto__ = ... 语句上的时间花费，
// 而且可能会延伸到任何代码，那些可以访问任何[[Prototype]]已被更改的对象的代码。
// 如果你关心性能，你应该避免设置一个对象的 [[Prototype]]。
// 相反，你应该使用 Object.create()来创建带有你想要的[[Prototype]]的新对象。

