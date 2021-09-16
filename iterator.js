/**
 * iterator
 */

/*
var myIterator = {
	[Symbol.iterator]: function(){return this},
	next: function(){
		 return {
		 	 done: false,
			 value: ''
		 }
	}
}

let someString = 'hi';
console.log(typeof someString[Symbol.iterator]);
let iterator = someString[Symbol.iterator]();
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());*/

/*
var someString = new String("hi");
someString[Symbol.iterator] = function(){
	return {
		next: function(){
			if(this._first){
				this._first = false;
				return {value: 'bye', done: false};
			}else{
				return {done: true};
			}
		},
		_first: true
	}
}
console.log([...someString]);
var iterator = someString[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
*/

/*
var myIterable = {};
myIterable[Symbol.iterator] = function* (){
	yield 1;
	yield 2
	yield 3;
};
console.log([...myIterable]);
let iterator = myIterable[Symbol.iterator]();
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());*/

/*// 模拟
function makeIterator(array){
	let nextIndex = 0;
	return {
		next: function(){
			return nextIndex < array.length ? {
				value: array[nextIndex++],
				done: false
			}: {
				done: true
			}
		}
	}
}

var it = makeIterator(['hello', 'world']);
console.log(it.next());
console.log(it.next());
console.log(it.next());*/

/*function* idMaker(){
	var index = 0;
	while(true){
		yield index ++;
	}
}
var gen = idMaker();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);*/

// generator 实现
/*let myIterator = {
	[Symbol.iterator]: function* (){
		yield 1;
		yield 2;
		yield 3;
	}
};

let test = myIterator[Symbol.iterator]();
console.log(test.next());
console.log(test.next());
console.log(test.next());*/

/*
let obj = {
	* [Symbol.iterator](){
		yield 'hello';
		yield 'world';
	}
};

for (let x of obj){
	console.log(x);
}
*/

/*
let es6 = {
	edition: 6,
	committee: "TC39",
	standard: "ECMA-262"
};

let array = ['wanglin', 'shaowen', 'hahahaha'];

for (let e in es6){
	console.log('key: ' + e, ', value: ' + es6[e]);
}
for (let item of Object.keys(es6) ){
	console.log(item, ": ", es6[item]);
}
for (let arr of array ){
	console.log(arr);
}*/
