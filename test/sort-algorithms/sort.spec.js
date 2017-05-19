'use strict';

const sort = require('../../').sort,
			expect = require('chai').expect;

describe('Sort', function () {
	describe('#isSorting', function () {
		it('should return true if function sorts an array', function () {
			const algo = require('../../');

			expect(sort.isSorting(algo.insertionSort)).to.be.true;
			// expect(sort.isSorting(algo.shellSort)).to.be.true;
			// expect(sort.isSorting(algo.bubbleSort)).to.be.true;
		});

		it('should return false if function doesn`t sort an array', function () {
			let someFunc = function () {};

			expect(sort.isSorting(someFunc)).to.be.false;
		});
	});


	describe('#shuffle', function () {
		it('should return shufled array', function () {
			let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
					shuffledArr = sort.shuffle(arr),
					shuffledArr_2 = sort.shuffle(shuffledArr),
					shuffledArr_3 = sort.shuffle(shuffledArr_2);

			expect(shuffledArr).to.not.deep.equal(arr);
			expect(shuffledArr_2).to.not.deep.equal(shuffledArr);
			expect(shuffledArr_3).to.not.deep.equal(shuffledArr_2);
		});
	});
});
