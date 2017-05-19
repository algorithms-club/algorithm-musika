'use strict';

const mergeSort = require('../../').mergeSort,
			expect = require('chai').expect;

describe('Selection sort', function () {
	it('should return an Array', function () {
		let arr = [2, 3, 1];

		expect(mergeSort(arr)).to.be.an('array');
	});


	it('should sort an array of numbers', function () {
		let arr = [2, 5, 8, 9, 4, 6, 7, 3, 0, 1];

		expect(mergeSort(arr)).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

		arr = [2, 5, 22, 22, 4, 6, 7, 2, 0, 1];
		expect(mergeSort(arr)).to.deep.equal([0, 1, 2, 2, 4, 5, 6, 7, 22, 22]);

		arr = [112];
		expect(mergeSort(arr)).to.deep.equal([112]);
	});


	it('should sort an array of strings', function () {
		let arr = ['aaa', 'ccc', 'bbb', 'eee', 'fff', 'ddd', 'abc', 'abb', 'aca', 'bba'];

		expect(mergeSort(arr)).to.deep.equal(['aaa', 'abb', 'abc', 'aca', 'bba', 'bbb', 'ccc', 'ddd', 'eee', 'fff']);

		arr = ['aaa'];
		expect(mergeSort(arr)).to.deep.equal(['aaa']);
	});
});
