/**
 * function
 */

// console.log( (function(){}).constructor === Function );

/**
 * apply()
 */
/*const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);
console.log(max);
console.log(min);*/

/*var array = ['a', 'b'];
var elements = [0, 1, 2];
Array.prototype.push.apply(array, elements);
console.log(array); */

// action scope
/*
var str1 = 'lin';
function test(){
	var str1 = 'wanglin';
	console.log(str1);
}
test();
console.log(str1);
*/

// closure
/*function addSquares(a, b){
	function square(x){
		return x * x;
	}
	return square(a) + square(b);
}
let test = addSquares(2, 3);
console.log(test);*/
/*
function outside(x){
	console.log('outside x : ', x);
	function inside(y){
		console.log('inside y: ', y);
		return x + y;
	}
	return inside;
}

var fInside = outside(3);
console.log(fInside);
console.log(fInside(5));*/

/*var pet = function(name){
	console.log('pet-->', name);
	var getName = function(){
		console.log('getName-->', name);
		return name;
	}
	return getName;
};
var myPet = pet('Vivie');
console.log( myPet() );*/

/*
var createPet = function(name) {
	var sex;

	return {
		setName: function(newName) {
			name = newName;
		},

		getName: function() {
			return name;
		},

		getSex: function() {
			return sex;
		},

		setSex: function(newSex) {
			if(typeof newSex == "string"
				&& (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
				sex = newSex;
			}
		}
	}
}

var pet = createPet('Vivie');
console.log(pet.getName());

pet.setName('Oliver');
pet.setSex('male');
console.log(pet.getSex());
console.log(pet.getName());
*/

/*var getCode = (function(){
	var secureCode = '12345';
	return function(){
		return secureCode;
	}
})();

console.log(getCode());
console.log(secureCode);*/

// 自定义只运行一次的函数
/*
var once = (function(){
	var first = true;

	return function(){
		if(first){
			console.log('once');
		}
		first = false;
		console.log( first );
	}
})();
*/

// console.log(once);
// once();
// once();
// once();

/*var x = new Boolean(false);
console.log(x);
console.log(x.valueOf());
if(x.valueOf()){
	console.log('x true ');
}else{
	console.log('x false ');
}

var bNoParam = new Boolean();
console.log(bNoParam);
if(bNoParam.valueOf()){
	console.log(' true ');
}else{
	console.log(' false ');
}

var bZero = new Boolean(0);
if(bZero){
	console.log(' bZero true ');
}

var bUndefined = new Boolean(null);
if(bUndefined.valueOf()){
	console.log(' bUndefined true ');
}else{
	console.log(' bUndefined false ');
}*/



/*const buffer = new ArrayBuffer(16);

const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 12, 4);
view1.setInt8(12, 42);
console.log(view2.getInt8(0));*/


//  回文判断
/*
function palindrome(str){
	if(str.length <= 1) return true;

	if(str[0] != str[str.length - 1]) return false;

	return palindrome(str.slice(1, -1));
}

let test = 'aaabccc';
let test1 = 'xxyxx';
let result = palindrome(test);
let result2 = palindrome(test1);
console.log(result);
console.log(result2);*/
