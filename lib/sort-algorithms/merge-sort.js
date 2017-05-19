'use strict';

function sort (arr) {
	let len = arr.length;

	if (len < 2) { return arr; }
	return merge(sort(arr.slice(0, len / 2)), sort(arr.slice(len / 2)));
}


function merge (arr1, arr2) {
	let mergeArr = [];

	while (arr1.length && arr2.length) {
		if (arr1[0] < arr2[0]) { mergeArr.push(arr1.shift()); }
		else                   { mergeArr.push(arr2.shift()); }
	}

	if (!arr1.length)      { return mergeArr.concat(arr2); }
	else if (!arr2.length) { return mergeArr.concat(arr1); }

	return mergeArr;
}


module.exports = sort;
