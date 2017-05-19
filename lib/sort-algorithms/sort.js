'use strict';

let sort = {
	isSorting (sortFunc) {
		let arrs = [
					[2, 5, 8, 9, 4, 6, 7, 3, 0, 1],
					[2, 5, 22, 22, 4, 6, 7, 2, 0, 1],
					[112],
					['aaa', 'ccc', 'bbb', 'eee', 'fff', 'ddd', 'abc', 'abb', 'aca', 'bba'],
					['aaa']
				],
				arrs2 = [
					[2, 5, 8, 9, 4, 6, 7, 3, 0, 1],
					[2, 5, 22, 22, 4, 6, 7, 2, 0, 1],
					[112],
					['aaa', 'ccc', 'bbb', 'eee', 'fff', 'ddd', 'abc', 'abb', 'aca', 'bba'],
					['aaa']
				];


		for (let arr of arrs) { sortFunc(arr); }
		for (let arr of arrs2) {
			if (typeof arr[0] == 'number') {
				arr.sort((a, b)=> a - b);

			} else {
				arr.sort();
			}
		}

		return arrs.toString() === arrs2.toString();
	},


	shuffle (inputArr) {
		let arr = JSON.parse(JSON.stringify(inputArr)),
				resArr = [];

		for (let i = arr.length; i--;) {
			let index = (Math.random() * i).toFixed(),
					elem = arr.splice(index, 1)[0];

			resArr.push(elem);
		}

		console.log('before', inputArr);
		console.log('after ', resArr);
		return resArr;
	}
};

module.exports = sort;
