
/**
 * merge sort
 */

//排序并合并
/*
function merge(left, right){
	let re = [];
	while(left.length > 0 && right.length > 0){
		if(left[0] < right[0]){
			re.push(left.shift());
		}else{
			re.push(right.shift());
		}
	}
	return re.concat(left).concat(right);
}

function mergeSort(arr){
	if(arr.length == 1) return arr;

	let mid = Math.floor(arr.length / 2);
	let left = arr.slice(0, mid);
	let right = arr.slice(mid);

	return merge( mergeSort(left), mergeSort(right) );
}

var test = [2,3,6,4,2,1,90,100,20,5];
console.log(mergeSort(test));
*/
