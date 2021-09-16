
/**
 * quick sort
 */

// 1、找基准（一般以中间项为基准）
// 2、遍历数组，小于基准的放在left， 大于基准的放在right
// 3、递归
/*
function quickSort(arr){
	if(arr.length <= 1) return arr;

	let pivotIndex = Math.floor(arr.length / 2);
	let pivot = arr.splice(pivotIndex, 1)[0];
	let left = [];
	let right = [];

	for( let i = 0; i < arr.length; i ++ ){
		if(arr[i] <= pivot){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}

	console.log('--sort start--');
	console.log(left);
	console.log(right);
	console.log('--sort end--');
	return quickSort(left).concat([pivot], quickSort(right));
}

var test = [2,3,6,4,2,1,90,100,20,5];
console.log(quickSort(test));
*/

function quickSort2(array, compareFn = defaultCompare){
	return quick(array, 0, array.length - 1, compareFn);
}

function quick(array, left, right, compareFn){
	let index;
	if(array.length > 1){
		index = partition(array, left, right, compareFn);
		if(left < index - 1){
			quick(array, left, index - 1, compareFn);
		}
		if(index < right){
			quick(array, index, right, compareFn);
		}
	}
	return array;
}

function partition(array, left, right, compareFn){

}
