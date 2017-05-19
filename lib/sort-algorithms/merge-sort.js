'use strict';

function sort (arr) {
	let len = arr.length;

	if (len < 2) { return arr; }
	return merge(sort(arr.slice(0, len / 2)), sort(arr.slice(len / 2)));
}


function merge (arr1, arr2) {
	let mergeArr = [],
			i = 0, j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) { mergeArr.push(arr1[i++]); }
		else                   { mergeArr.push(arr2[j++]); }
	}

	if (i == arr1.length) { concatFromIndex(mergeArr, arr2, j); }
	else                  { concatFromIndex(mergeArr, arr1, i); }

	return mergeArr;
}


function concatFromIndex (arr1, arr2, i) {
	while (i < arr2.length) {
		arr1.push(arr2[i]);
		i++;
	}
}


module.exports = sort;
