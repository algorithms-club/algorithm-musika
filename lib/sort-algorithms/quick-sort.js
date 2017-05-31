'use strict';


function sort (arr, lo = 0, hi = arr.length - 1) {
	if (hi > lo) {
		let partIndex = partition(arr, lo, hi);

		sort(arr, lo, partIndex - 1);
		sort(arr, partIndex, hi);
	}

	return arr;
}


function partition (arr, lo, hi) {
	let pivot = arr[Math.round(Math.random() * (hi - lo) + lo)],
			i = lo,
			j = hi;

	while (i < j) {
		while (arr[i] < pivot) { i++; }
		while (arr[j] > pivot) { j--; }

		if (i < j) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
			i++;
			j--;
		}
	}

	return i;
}



module.exports = sort;







