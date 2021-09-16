/*
** module
 */

/* 简单模块 */
/*function CoolModule(){
	var something = "cool";
	var another = [1, 2, 3];

	function doSomething(){
		console.log(something);
	}

	function doAnother(){
		console.log(another.join(" ! "));
	}

	return {
		doSomething: doSomething,
		doAnother: doAnother
	};
}

var foo = CoolModule();
foo.doSomething();  // cool
foo.doAnother();    // 1 ! 2 ! 3*/


/* 单例模式 */
/*var foo = (function CoolModule(){
	var something = "cool";
	var another = [1, 2, 3];

	function doSomething(){
		console.log(something);
	}

	function doAnother(){
		console.log(another.join(" ! "));
	}

	return {
		doSomething: doSomething,
		doAnother: doAnother
	};
})();

foo.doSomething();  // cool
foo.doAnother();    // 1 ! 2 ! 3*/ 


/* 模块传递参数 */
/*function CoolModule(id){
	function identify(){
		console.log(id);
	}

	return {
		identify: identify
	};
}

var foo1 = CoolModule("foo 1");
var foo2 = CoolModule("foo 2");
foo1.identify();
foo2.identify();*/


/* 现代模块机制 */
/*var MyModules = (function Manager(){
	var modules = {};

	function define(name, deps, impl){
		for (var i = 0; i < deps.length; i ++){
			deps[i] = modules[deps[i]];
		}
		modules[name] = impl.apply(impl, deps);
	}

	function get(name){
		return modules[name];
	}

	return {
		define: define,
		get: get
	};
})();*/



