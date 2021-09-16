/**
 * map
 */

/*
let myMap = new Map();
let keyObj = {'wang': 'test'};
let keyObj2 = {'wang': 'test'};
let keyObj3 = keyObj;
let keyFunc = function() {};
let keyString = 'a string';

myMap.set(keyString, "和键'a string'关联的值");
myMap.set(keyObj, "和键keyObj关联的值");
myMap.set(keyFunc, "和键keyFunc关联的值");

let size = myMap.size;
console.log(size);
console.log(myMap.get(keyString));
console.log(myMap.get(keyObj));
console.log(myMap.get( {'wang': 'test'} ));
console.log(myMap.get(keyFunc));
console.log(keyObj == {'wang': 'test'} );
console.log(keyObj == keyObj2 );
console.log(keyObj == keyObj3 );*/

/*
 * for..of
 */
/*let myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
for(let [key, value] of myMap){
	console.log(key + ' = ' + value);
}
for ( let key of myMap.keys() ){
	console.log(key);
}
for ( let value of myMap.values() ){
	console.log(value);
}

// forEach
myMap.forEach((value, key) => {
	console.log(key + ' = ' + value);
});*/

/*
*  map 和数组的关系
 */
/*let kvArray = [["key1", "value1"], ["key2", "value2"]];
let myMap = new Map(kvArray);
console.log(myMap);
console.log(myMap.get('key1'));
console.log(Array.from(myMap));
console.log([...myMap]);*/


/*let original = new Map([
	[1, 'one']
]);
let clone = new Map(original);
let clone2 = original;
// console.log(clone.get(1));
// console.log(clone === original);
// console.log(clone2 === original);
// console.log(clone2.get(1));
clone.set(1, 'two');
console.log(original.get(1));
console.log(clone.get(1));
// console.log(clone2.get(1));
clone2.set(1, 'two');
console.log(original.get(1));*/

/*
*  合并
 */
/*let first = new Map([
	[1, 'one'],
	[2, 'two'],
	[3, 'three'],
]);

let second = new Map([
	[1, 'uno'],
	[2, 'dos']
]);
let merged = new Map([...first, ...second]);
console.log(merged);*/

//结合数组的map和filter方法
/*const map0 = new Map()
	.set(1, 'a')
	.set(2, 'b')
	.set(3, 'c');

const map1 = new Map(
	[...map0].filter( ([k, v]) => k < 3)
);*/
/*[...map0].forEach(([k, v], index) => {
	console.log(k);
	console.log(v);
	console.log(index);
});*/
/*console.log(map1);
const map2 = new Map(
	[...map0].map( ([k, v]) => [k * 2, "_" + v] )
);
console.log(map2);*/


/**
 * WeakMap
 */
/*
const wm1 = new WeakMap(),
	wm2 = new WeakMap(),
	wm3 = new WeakMap();
const o1 = {},
	o2 = function(){},
	o3 = window;
wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm1.set(o3, "haha");
console.log(wm1);
wm2.set(o1, o2); // value可以是任意值,包括一个对象或一个函数
wm2.set(o3, undefined);
wm2.set(wm1, wm2);
console.log(wm2);

console.log(wm1.has(o2));
console.log(wm2.has(o2));
console.log(wm2.has(o3));

console.log(wm1.has(o1));
console.log(wm1.has({}));
console.log(wm1.has(window));
console.log(wm1.has(function(){}));
*/






