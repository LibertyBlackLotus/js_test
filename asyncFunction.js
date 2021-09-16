/**
 * asyncFunction
 */

/*
function resolveAfter2Seconds(x) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('resolved');
		}, 2000);
	});
}
*/

/*
var AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
var a = new AsyncFunction('a', 'b', 'return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);');
a(10, 20).then( v => {
	console.log(v);
})
*/
/*
async function asyncCall(){
	console.log('calling');
	const result = await resolveAfter2Seconds();
	console.log(result);
}

asyncCall();*/

/*

var resolveAfter2Seconds = function() {
	console.log("starting slow promise");
	return new Promise(resolve => {
		setTimeout(function() {
			resolve("slow");
			console.log("slow promise is done");
		}, 2000);
	});
};

var resolveAfter1Second = function() {
	console.log("starting fast promise");
	return new Promise(resolve => {
		setTimeout(function() {
			resolve("fast");
			console.log("fast promise is done");
		}, 1000);
	});
};

var sequentialStart = async function(){
	console.log('==SEQUENTIAL START==');

	const slow = await resolveAfter2Seconds();
	console.log(slow);

	const fast = await resolveAfter1Second();
	console.log(fast);
}

var concurrentStart = async function() {
	console.log('==CONCURRENT START with await==');
	const slow = resolveAfter2Seconds(); // starts timer immediately
	const fast = resolveAfter1Second(); // starts timer immediately

	// 1. Execution gets here almost instantly
	console.log(await slow); // 2. this runs 2 seconds after 1.
	console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
}

var concurrentPromise = function() {
	console.log('==CONCURRENT START with Promise.all==');
	return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
		console.log(messages);
		console.log(messages[0]); // slow
		console.log(messages[1]); // fast
	});
}

var parallel = async function() {
	console.log('==PARALLEL with await Promise.all==');

	// Start 2 "jobs" in parallel and wait for both of them to complete
	await Promise.all([
		(async()=>console.log(await resolveAfter2Seconds()))(),
		(async()=>console.log(await resolveAfter1Second()))()
	]);
}

var parallelPromise = function() {
	console.log('==PARALLEL with Promise.then==');
	resolveAfter2Seconds().then((message)=>console.log(message));
	resolveAfter1Second().then((message)=>console.log(message));
}

// sequentialStart();
// concurrentStart();
// concurrentPromise();
parallel();
// parallelPromise();*/


/*const fs = require('fs');
const readFile = function (fileName) {
	return new Promise(function (resolve, reject) {
		fs.readFile(fileName, function(error, data) {
			if (error) return reject(error);
			resolve(data);
		});
	});
};

const gen = function* () {
	const f1 = yield readFile('/etc/fstab');
	const f2 = yield readFile('/etc/shells');
	console.log(f1.toString());
	console.log(f2.toString());
};

// gen可改写为

const asyncReadFile = async function(){
	const f1 = await readFile('/etc/fstab');
	const f2 = await readFile('/etc/shells');
	console.log(f1.toString());
	console.log(f2.toString());
}*/

