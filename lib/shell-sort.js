'use strict';

/**
 * Sort array.
 * Returns sorted array.
 *
 * @param {string[]|number[]} arr
 * @returns {string[]|number[]}
 */
function shellSort (arr) {
	const incrementSequence = [1, 4, 10, 23, 57, 132, 301, 701, 1750],
				initialIncrementIndex = getInitialIncrementIndex(arr.length, incrementSequence);

	if (arr.length === 1) { return arr; }

	for (let i = initialIncrementIndex; i >= 0; i--) {
		partialInsertionSort (arr, incrementSequence[i]);
	}

	return arr;
}


/**
 * Find and return initial increment value.
 * According to https://oeis.org/A102549
 *
 * @param {number} arrLength
 * @param {number[]} incrementSequence
 * @returns {number}
 */
function getInitialIncrementIndex (arrLength, incrementSequence) {
	let closestIncrement = arrLength / 2;

	for (let i = 0; i < incrementSequence.length; i++) {
		if (closestIncrement < incrementSequence[i]) {
			return (i - 1);
		}
	}

	return (incrementSequence.length - 1);
}


/**
 * Partial sort of array by increment.
 *
 * @param {string[]|number[]} arr
 * @param {number} increment
 */
function partialInsertionSort (arr, increment) {
	let length = arr.length;

	for (let j = 0; j < increment; j++) {
		for (let i = increment + j; i < length; i += increment) {
			if (arr[i] < arr[i - increment]) {
				insertElemInArr (arr, i, increment);
			}
		}
	}
}


/**
 * Paste unsorted element on its place in incremented array.
 *
 * @param {string[]|number[]} arr
 * @param {number} index
 * @param {number} increment
 */
function insertElemInArr (arr, index, increment) {
	let elem = arr[index];

	for (let i = index; i >= 0; i -= increment) {
		if (i === 0) {
			arr[i] = elem;

		} else if (arr[i - increment] > elem) {
			arr[i] = arr[i - increment];

		} else {
			arr[i] = elem;
			return arr;
		}
	}
}


module.exports = shellSort;
