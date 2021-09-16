/**
 * array
 */

/* in 与 of */
/*
let arr = [3, 5, 7];
arr.foo = "hello";
/!*for (let i in arr){
	console.log(i);
}*!/

for (let i of arr){
	console.log(i);
}
console.log(arr);
*/


/* 数组去重 */
// let arr1 = [1, 2, 2, 2, 3, 4, 5, 4, 3];
/*console.log(new Set(arr1));
console.log( Array.from(new Set(arr1)) );
console.log(arr1);

let result = arr1.sort().reduce( (result, current) => {
	if(result.length === 0 || result[result.length - 1] != current){
		result.push(current);
	}
	return result;
}, []);

console.log(result);*/

// var myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
/*var result = myArray.reduce( (result, item) => {
	if(result.indexOf(item) === -1){
		result.push(item);
	}
	return result;
}, []);
console.log(result);*/
/*var resultSet = Array.from(new Set(myArray));
console.log(resultSet);*/


//数组去重合并
/*function combine(){
	let arr = Array.prototype.concat.apply([], arguments);
	return Array.from( new Set(arr) );
}
let m = [1, 2, 2];
let n = [2, 3, 3];
console.log(combine(m, n));*/


// concat
/*let arr1 = [{x: 1}, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3);*/
/*arr1[0].x = 5;
console.log(arr1);
console.log(arr3);*/
/*arr3[0].x = 100;
console.log(arr3);
console.log(arr1);*/

/*let arr3 = [{x: 1}];
let arr4 = [{y: 2}];
let arr5 = arr3.concat(arr4);
console.log(arr5);
// arr4[0].x = 100;
arr4.push({x: 100});
console.log(arr4);
console.log(arr5);*/


//合并嵌套数组
/*var num1 = [[1]];
var num2 = [2, [3]];
var num3 =[5,[6]];
var nums = num1.concat(num2, num3);
nums[0].push(100);
console.log(nums);
console.log(num1);*/

// forEach
/*var words = ['one', 'two', 'three', 'four'];
words.forEach(word => {
	console.log(word);
	if(word === 'two'){
		words.shift();
		console.log(words);
	}
});*/


/* 扁平化数组 */
/*function flatten(arr){
	const result = [];
	arr.forEach( i => {
		if(Array.isArray(i)){
			result.push(...flatten(i));
		}else{
			result.push(i);
		}
	})
	return result;
}
const problem1 = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
let result1 = flatten(problem1);
console.log(result1);

const problem2 = [[1, 2], [3, 4], [5, 6]];
let result2 = flatten(problem2);
console.log(result2);*/


/*
// flat
console.log(problem.flat(Infinity));
// 以下适用二维展为一维
// reduce
console.log(problem1.reduce( (acc, val) => acc.concat(val), []));
// 使用扩展运算符 ...
console.log([].concat(...problem1));*/


// filter
/*var a1 = ['a', 10, 'b', 20, 'c', 30];
var a2 = a1.filter( item => typeof item === 'string');
console.log(a2);*/

/*var arr = [
	{ id: 15 },
	{ id: -1 },
	{ id: 0 },
	{ id: 3 },
	{ id: 12.2 },
	{ },
	{ id: null },
	{ id: NaN },
	{ id: 'undefined' }
];

var invalidEntries = 0;

function isNumber(obj){
	return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterByID(item){
	if(isNumber(item.id) && item.id !== 0){
		return true;
	}
	invalidEntries ++;
	return false;
}

var arrByID = arr.filter(filterByID);
console.log(arrByID);*/


// 简单模糊过滤
/*
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
function filterItems(arr, query){
	return arr.filter( el =>
		el.toLowerCase().indexOf(query.toLowerCase()) > -1
	);
}
console.log(filterItems(fruits, 'app'));
console.log(filterItems(fruits, 'an'));
console.log(fruits);
*/


// map
/*const map = new Map([[1, 2], [2, 4], [4, 8]]);
let arr1 = Array.from(map);
console.log(arr1);
const mapper = new Map([['1', 'a'], ['2', 'b']]);
let arr2 = Array.from(mapper.keys());
let arr3 = Array.from(mapper.values());
console.log(arr2);
console.log(arr3);*/

// console.log(["1", "2", "3"].map(item => parseInt(item) ));

/*var kvArray = [{key: 1, value: 10},
	{key: 2, value: 20},
	{key: 3, value: 30}];
var reformattedArray = kvArray.map( obj => {
	var rObj = {};
	rObj[obj.key] = obj.value;
	return rObj;
})
console.log(reformattedArray);*/

/*var numbers = [1, 2, 3, 4];
var filteredNumbers = numbers.map((num, index) => {
	if(index < 3){
		return num;
	}
	return 0;
});
var filtered2Numbers = numbers.filter( (item, index) => index < 3 );
console.log(filteredNumbers);
console.log(filtered2Numbers);*/

// reduce
//计算数组中每个元素出现的次数
// var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Tiff', 'Bruce', 'Tiff', 'Bruce', ];
/*var countedNames = names.reduce( (allNames, name) => {
	if(name in allNames){
		allNames[name] ++;
	}else{
		allNames[name] = 1;
	}
	return allNames;
}, {} );
console.log(countedNames);*/

/*let count = names.reduce( (result, name) => {
	if(result.hasOwnProperty(name)){
		result[name] ++;
	}else{
		result[name] = 1;
	}
	return result;
}, {} );
console.log( count );*/


/* 按属性对object分类 */
/*var people = [
	{ name: 'Alice', age: 21, sex: 'female' },
	{ name: 'Max', age: 20, sex: 'male'  },
	{ name: 'Jane', age: 20, sex: 'female'  }
];

function groupBy(objectArray, property){
	return objectArray.reduce( (acc, obj) => {
		var key = obj[property];
		!acc[key] && (acc[key] = []);
		acc[key].push(obj);
		return acc;
	}, {})
}

console.log(groupBy(people, 'age'));
console.log(groupBy(people, 'sex')); */


/* 实现 map */
/*if(!Array.prototype.mapUsingReduce){
	Array.prototype.mapUsingReduce = function(callback, thisArg){
		return this.reduce( (mappedArray, currentValue, index, array) => {
			mappedArray[index] = callback.call(thisArg, currentValue, index, array);
			return mappedArray;
		}, []);
	}
}*/
// var result = [1, 2, 3].mapUsingReduce( item => item + 1 );
// console.log(result);


/**  splice* /
/*
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
let removedItem = vegetables.splice(1, 1);

console.log(removedItem);
console.log(vegetables);
*/

/** find */
/* var points = [
	{ x: 10, y: 20 },
	{ x: 20, y: 30 },
	{ x: 30, y: 40 }
];

var toFind = 10;
var result = points.find( point =>  point.x == toFind );
console.log('result:', result); */

/** findIndex */
/* var points = [
	{ x: 10, y: 20 },
	{ x: 20, y: 30 },
	{ x: 30, y: 40 }
];

var toFind = 20;
var result = points.findIndex( point =>  point.x == toFind );
console.log('result:', result); */
