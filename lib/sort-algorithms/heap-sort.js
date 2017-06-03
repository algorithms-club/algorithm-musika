'use strict';

let binaryHeap = {
	getParentIndex (ch) { return (Math.round(ch / 2) - 1); },
	getChildIndex (p, ch) { return ((p + 1) * 2 - 2 + ch); },
	getSiblingIndex (sib) { return (sib % 2 * 2 - 1 + sib); },
	build (arr) {
		for (let i = arr.length - 1; i > 0; i -= 2) {
			checkUp (arr, i);
		}
	}
};


function sort (arr) {
	binaryHeap.build(arr);
	sortHeap(arr);

	return arr;
}


function sortHeap (arr) {
	let i = arr.length - 1;

	while (i) {
		[arr[0], arr[i]] = [arr[i], arr[0]];
		checkDown(arr, 0, --i);
	}
}


function checkUp (arr, childIndex) {
	let secChildIndex = binaryHeap.getSiblingIndex(childIndex),
			parentIndex = binaryHeap.getParentIndex(childIndex),
			newParentIndex = nodeSort(arr, parentIndex, childIndex, secChildIndex);

	checkDown(arr, newParentIndex);
}


function checkDown (arr, parentIndex, lastIndex = arr.length - 1) {
	let childIndex = binaryHeap.getChildIndex(parentIndex, 1),
			secChildIndex = binaryHeap.getChildIndex(parentIndex, 2),
			newParentIndex;

	if (parentIndex === false || childIndex > lastIndex) { return; }
	if (secChildIndex > lastIndex) { secChildIndex = null; }

	newParentIndex = nodeSort(arr, parentIndex, childIndex, secChildIndex);

	checkDown(arr, newParentIndex, lastIndex);
}


function nodeSort (arr, parentIndex, childIndex, secChildIndex) {
	if (arr[childIndex] < arr[secChildIndex]) { childIndex = secChildIndex; }

	if (arr[childIndex] > arr[parentIndex]) {
		[arr[childIndex], arr[parentIndex]] = [arr[parentIndex], arr[childIndex]];

		return childIndex;
	} else {
		return false;
	}
}


module.exports = sort;
