/**
 * bubbling sort
 */

/*
function bubbleSort(arr){
	let len = arr.length;
	for(let i = 0; i < len; i ++){
		for(let j = 0; j < len-1-i; j ++){
			if(arr[j] > arr[j+1]){  //相邻元素两两对比
				let temp = arr[j+1];
				arr[j+1] = arr[j];  //比较大的值放到后面
				arr[j] = temp;

				//[arr[j], arr[j+1]] = [arr[j+1], arr[j]];  //ES6
			}
		}
	}
	return arr;
}

let arr = [2, 3, 4, 2, 5, 8, 10, 20, 100, 90];
console.log(bubbleSort(arr));*/
