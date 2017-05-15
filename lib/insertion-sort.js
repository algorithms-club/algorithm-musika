'use strict';

/**
 * Sort array.
 * Returns sorted array.
 *
 * @param {string[]|number[]} arr
 * @returns {string[]|number[]}
 */
function insertionSort (arr) {
	let isSwapped = false,
			unsortedIndex;

	if (arr.length === 1) { return arr; }

	unsortedIndex = getUnsortedElemIndex(arr);

	while (~unsortedIndex) {
		arr = insertElemInArr (arr, unsortedIndex);
		unsortedIndex = getUnsortedElemIndex(arr);
	}

	return arr;
}


/**
 * Find index of unsorted element in array
 *
 * @param {string[]|number[]} arr
 * @returns {number} - Unsorted element index
 */
function getUnsortedElemIndex (arr) {
	let length = arr.length;

	for (let i = 1; i < length; i++) {
		if (arr[i] < arr[i-1]) { return i; }
	}
	return -1;
}


/**
 * Paste unsorted element on its place in array.
 * Returns sorted array.
 *
 * @param {string[]|number[]} arr
 * @param {number} index
 * @returns {string[]|number[]}
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
			return arr;
		}
	}

	return arr;
}

module.exports = insertionSort;
