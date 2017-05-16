'use strict';

/**
 * Sort array.
 * Returns sorted array.
 *
 * @param {string[]|number[]} arr
 * @returns {string[]|number[]}
 */
function insertionSort (arr) {
	let length = arr.length;

	if (arr.length === 1) { return arr; }


	for (let i = 1; i < length; i++) {
		if (arr[i] < arr[i-1]) {
			insertElemInArr (arr, i);
		}
	}

	return arr;
}


/**
 * Paste unsorted element on its place in array.
 *
 * @param {string[]|number[]} arr
 * @param {number} index
 */
function insertElemInArr (arr, index) {
	let elem = arr[index];

	for (let i = index; i >= 0; i--) {
		if (i === 0) {
			arr[i] = elem;

		} else if (arr[i-1] > elem) {
			arr[i] = arr[i-1];

		} else {
			arr[i] = elem;
			return;
		}
	}
}

module.exports = insertionSort;
