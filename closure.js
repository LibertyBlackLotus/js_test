/*
** closure
 */

/* 基本概念 */
/*
function foo(){
	var a = 2;
	function bar(){
		console.log(a);
	}
	return bar;
}
var baz = foo();
baz(); // 2*/

// 访问内部词法作用域
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
bar(); // 2*/


/* 弄明白 */
/*function wait(message){
	setTimeout(function timer(){
		console.log(message);
	}, 1000);
}
wait("Hello, closure!");*/

/*for (var i = 1; i <= 5; i ++){
	setTimeout(function timer(){
		console.log(i);  // 遇到问题了
	}, i * 1000);
}*/

/*
for (var i = 1; i <= 5; i ++){
	(function(){
		setTimeout(function timer(){
			console.log(i); //无法解决
		}, i * 1000);
	})();
}
*/

/*for (var i = 1; i <= 5; i ++){
	(function(){
		var j = i;
		setTimeout(function timer(){
			console.log(j);
		}, j * 1000);
	})();
}*/

/*for (var i = 1; i <= 5; i ++){
	(function(j){
		setTimeout(function timer(){
			console.log(j);
		}, j * 1000);
	})(i);
}*/

// cool
/*for (var i = 1; i <= 5; i ++){
	let j = i;
	setTimeout(function timer(){
		console.log(j);
	}, j * 1000);
}*/

// for 循环头部的let声明有一个特殊行为，
// 变量在循环过程中不止被声明一次，每次迭代都会声明。
// 随后的每个迭代都会使用上一个
// 迭代结束时的值来初始化这个变量。
/*
for (let i = 1; i <= 5; i ++){
	setTimeout(function timer(){
		console.log(i);  // very good
	}, i * 1000);
}
*/





