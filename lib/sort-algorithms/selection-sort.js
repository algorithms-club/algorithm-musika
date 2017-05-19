'use strict';

function sort (arr) {
	let lastIndex = arr.length - 1;

	for (let i = 0; i < lastIndex; i++) {
		let minItemIndex = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minItemIndex]) { minItemIndex = j; }
		}

		[arr[i], arr[minItemIndex]] = [arr[minItemIndex], arr[i]];
	}

	return arr;
}

module.exports = sort;
