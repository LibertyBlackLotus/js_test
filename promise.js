
/**
 * promise
 */


/*const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('foo');
	}, 300);
});

promise1.then( value => {
	console.log(value);
	return value;
}).then(value => {
	console.log(value);
})*/


/*let promise = new Promise((resolve, reject) => {
	console.log('Promise');
	resolve();
});

promise.then( () => {
	console.log('resolved!');
});
console.log('Hi');*/


/*
var promiseCount = 0;
function testPromise(){
	let thisPromiseCount = ++promiseCount;

	let log = document.getElementById('log');
	log.insertAdjacentHTML('beforeend', thisPromiseCount +
		') 开始 (<small>同步代码开始</small>)<br/>');

	// 新构建一个 Promise 实例：使用Promise实现每过一段时间给计数器加一的过程，每段时间间隔为1~3秒不等
	let p1 = new Promise(
		// resolver 函数在 Promise 成功或失败时都可能被调用
		(resolve, reject) => {
			log.insertAdjacentHTML('beforeend', thisPromiseCount +
				') Promise 开始 (<small>异步代码开始</small>)<br/>');
			// 创建一个异步调用
			window.setTimeout(
				function() {
					// 填充 Promise
					resolve(thisPromiseCount);
				}, Math.random() * 2000 + 1000);
		}
	);


	// Promise 不论成功或失败都会调用 then
	// catch() 只有当 promise 失败时才会调用
	p1.then(
		// 记录填充值
		function(val) {
			log.insertAdjacentHTML('beforeend', val +
				') Promise 已填充完毕 (<small>异步代码结束</small>)<br/>');
		})
		.catch(
			// 记录失败原因
			(reason) => {
				console.log('处理失败的 promise ('+reason+')');
			});

	log.insertAdjacentHTML('beforeend', thisPromiseCount +
		') Promise made (<small>同步代码结束</small>)<br/>');

}

let button = document.querySelectorAll('button');
button[0].addEventListener('click', () => {
	testPromise();
});
*/

/*
var original = new Promise(((resolve, reject) => {
	// resolve('wanglin');
	reject('wanglin');
}));
var cast = Promise.resolve(original);

console.log(original === cast);
cast.then( data => {
	console.log('resolve-->', data);
}, rej => {
	console.log('reject-->', rej);
});
*/


/*
var p1 = Promise.resolve({
	then:  function(onFulfill, onReject) { onFulfill("fulfilled!") }
	});
console.log(p1 instanceof Promise) // true, 这是一个Promise对象
p1.then(function(v){
	console.log(v);
}, function(e){

});

var thenable = { then: function(resolve){
	    resolve('Resolving');
		throw new TypeError('Throwing');
	}};
var p2 = Promise.resolve(thenable);
p2.then(function(v){
	console.log(v);
}, function(e){
	console.log(e);
})*/

/*
new Promise((resolve, reject) => {
	console.log('初始化');

	resolve();
})
	.then(() => {
		throw new Error('有哪里不对了');

		console.log('执行「这个」”');
	})
	.catch(() => {
		console.log('执行「那个」');
	})
	.then(() => {
		console.log('执行「这个」，无论前面发生了什么');
	});
*/

// promise 调度
/* var p3 = new Promise( function(resolve, reject){
	resolve( "B" );
});

var p1 = new Promise( function(resolve, reject){
	resolve( p3 );
});

var p2 = new Promise( function(resolve, reject){
	resolve( "A" );
});

p1.then( function(v){
	console.log( v );
});

p2.then( function(v){
	console.log( v );
}); */
//结果 A B , p3会在p1内部展开，但是是异步的

/* 
var p1 = new Promise( function(resolve, reject){
	resolve( 42 );
});

var p2 = Promise.resolve( 42 );

console.log(p1);
console.log(p2);
console.log( p1 == p2 );

var p3 = Promise.resolve( 3 );
var p4 = Promise.resolve( p3 );
console.log(p3);
console.log(p4);
console.log( p3 === p4 );
 */

/*var p = {
	then: function(cb, errcb){
		cb( 42 );
		errcb( "evil laugh" );
	}
};

p.then(function fulfilled(val){
	console.log( val );
}, function rejected(err){
	console.log( err );
});*/


//链式流
/* var p = Promise.resolve( 21 );
p.then( function(v){
	console.log( v );

	return new Promise( function(resolve, reject){
		setTimeout( function(){
			resolve( v * 2 );
		}, 1000);
	});
})
.then( function(v){
	console.log( v );
}); */


/*function delay(time){
	return new Promise( function(resolve, reject){
		setTimeout( resolve, time);
	});
}

delay( 100 )
.then( function STEP2(){
	console.log( "step 2 (after 100ms)" );
	return delay( 200 );
})
.then( function STEP3(){
	console.log( "step 3 (after another 200ms)" );
})
.then( function STEP4(){
	console.log( "step 4 (next Job)" );
	return delay( 50 );
})
.then( function STEP5(){
	console.log( "step 4 (after another 50ms)" );
})*/


// 在 event loop 中的顺序
/*
setTimeout(() => {
	console.log('three');
});

Promise.resolve().then(() => {
	console.log('two');
});

console.log('one');*/



/* 手动实现promise */


