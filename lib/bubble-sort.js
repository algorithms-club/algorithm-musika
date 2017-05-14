'use strict';

module.exports = function(arr) {
	if (!arr.length) { return arr; }

	let isSwapped = false,
			isSorted = false,
			i = 0;

	while (!isSorted) {
		if (i >= arr.length - 1) {
			if (!isSwapped) { isSorted = true; }

			i = 0;
			isSwapped = false;
			continue;
		}

		if (arr[i] > arr[i + 1]) {
			[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

			isSwapped = true;
		}

		i++;
	}

	return arr;
};
