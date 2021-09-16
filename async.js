/**
async
*/

/* function foo(){
	console.log( b );
	return 1;
}

var a, b, c;

c = {
	get bar(){
		console.log( a );
		return 1;
	}
};

a = 10;
b = 30;
console.log( a += foo() );  */


//事件循环与任务队列
/* console.log( 'A' );
setTimeout(function(){
	console.log( 'B' ) 
}, 0);

// schedule为理论上的任务API
schedule( function(){
	console.log( 'C' );

	schedule( function(){
		console.log( 'D' );
	} )
} ) */
//输出结果为 A C D B，因为任务处理是在当前事件循环tick结尾处，而定时器触发了下一个事件循环tick。


