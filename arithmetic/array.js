

// let numbers = [1, 2, 4, 78, 50, 23, 35, 44, 18];

// 模拟 unshift
/*Array.prototype.insertFirstPosition = function(value){
	for (let i = this.length; i >= 0; i --){
		this[i] = this[i - 1];
	}
	this[0] = value;
}

numbers.insertFirstPosition(-1);
console.log(numbers);*/

// 模拟shift
/*Array.prototype.reIndex = function(myArray){
	const newArray = [];
	for (let i = 0; i < myArray.length; i ++){
		if(myArray[i] != undefined){
			newArray.push(myArray[i]);
		}
	}
	return newArray;
}

Array.prototype.removeFirstPosition = function(){
	for (let i = 0; i < this.length; i ++){
		this[i] = this[i + 1];
	}
	return this.reIndex(this);
}
console.log(numbers.removeFirstPosition()); */


/** ES2015和ES2016新增方法探讨
 *
 */
// for...of
/*
for(const n of numbers){
	console.log(n % 2 === 0 ? 'even': 'odd');
}
*/

// 使用 @@iterator
/*let iterator = numbers[Symbol.iterator]();
// console.log(iterator.next());
for (const n of iterator){
	console.log(n);
}*/


// entries、 keys和values
/*
let aEntries = numbers.entries();
// console.log(aEntries.next().value);
for (const e of aEntries){
	console.log(e);
}
*/
/*let aKeys = numbers.keys();
// console.log(aKeys.next().value);
for (const k of aKeys){
	console.log(k);
}

let aValues = numbers.values();
// console.log(aValues.next().value);
for (const v of aValues){
	console.log(v);
}*/


// from
/*
let odds = Array.from(numbers, x => (x % 2) == 0);
console.log(odds);*/

// Array.of
/*let numberCopy = Array.of(...numbers);
console.log(numberCopy);*/


// 数组排序
// console.log(numbers.reverse());
// console.log(numbers.sort((a, b) => a - b));

/*const friends = [
	{name: 'John', age: 30},
	{name: 'Ana', age: 20},
	{name: 'Chris', age: 25}
];

// function comparePerson(a, b){
// 	if(a.age < b.age){
// 		return -1;
// 	}
// 	if(a.age > b.age){
// 		return 1;
// 	}
// 	return 0;
// }
// console.log(friends.sort(comparePerson));
let friendsSortByAge = friends.sort( (a, b) => a.age - b.age );
console.log(friendsSortByAge);*/

// 使用映射改善排序
/*
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];
var mapped = list.map( (el, i) => {
		return {index: i, value: el.toLowerCase()};
	});
// console.log(mapped);
mapped.sort( (a, b) => {
	return +(a.value > b.value) || +(a.value === b.value) - 1;
});
console.log(mapped);
var result = mapped.map( el => {
	return list[el.index];
});
console.log(result);*/


// 数组查找
//find和findIndex  都只返回一个值
/*
let result1 = numbers.find( (element, index, array) => {
	return (element > 0);
} );
console.log(result1);*/

// includes
// console.log(numbers.includes(1));
// console.log(numbers.includes(1, 2));


//类型数组
/*
let length = 5;
let int16 = new Int16Array(length);
let array16 = [];
array16.length = length;

for (let i = 0; i < length; i ++){
	int16[i] = i + 1;
}
console.log(int16);*/
