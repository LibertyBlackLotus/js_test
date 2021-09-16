/**
 * shell sort
 */

/*
function shellSort(arr) {
	var gap = Math.floor(arr.length / 2);
	while (gap > 0) {
		for (var i = gap; i < arr.length; i++) {
			temp = arr[i];
			for (var j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
				arr[j] = arr[j - gap];
			}
			arr[j] = temp;
		}
		gap = Math.floor(gap / 2);
	}
	return arr;
}

let arr = [2, 3, 4, 2, 5, 8, 10, 20, 100, 90];
console.log(shellSort(arr));*/
