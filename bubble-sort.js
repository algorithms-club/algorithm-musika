'use strict';

module.exports = function(arr) {
	if (!arr.length) {
		return arr;
	}

	let isSwap = false;
	let i = 0;

	do {

		if (i >= arr.length - 1) {
		if (!isSwap) {
		return arr;
	}

		i = 0;
		isSwap = false;
		continue;
	}

		if (arr[i] > arr[i + 1]) {
		let lowest = arr[i];

		arr[i] = arr[i + 1];
		arr[i + 1] = lowest;

		isSwap = true;
	}

		i++;

	} while(true);
};
