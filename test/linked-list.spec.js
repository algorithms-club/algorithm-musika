'use strict';

const algolib = require('../'),
			expect = require('chai').expect;

describe('LinkedList', function () {
	describe('#getList()', function () {
		it('should return an array', function () {
			let ll = new algolib.LinkedList();

			expect(ll.getList()).to.be.an('Array');
		});

		it('should return array of list items', function () {
			let ll = new algolib.LinkedList();

			ll._head = {val: 1, next: {val: 3, next: {val: 2}}};

			expect(ll.getList().length).to.equal(3);
			expect(ll.getList()).to.deep.equal([1, 3, 2]);
		});
	});


	describe('#push(<item>)', function () {
		it('should add <item> to the end of list', function () {
			let ll = new algolib.LinkedList();

			ll.push(1);
			expect(ll.getList()).to.deep.equal([1]);

			ll.push(null);
			expect(ll.getList()).to.deep.equal([1, null]);

			ll.push(2);
			expect(ll.getList()).to.deep.equal([1, null, 2]);
		});

		it('shouldn`t do anything if <item> is undefined', function () {
			let ll = new algolib.LinkedList(),
					a;

			ll.push();
			ll.push(undefined);
			ll.push(a);

			expect(ll.getList().length).to.equal(0);
		});

		it('should return "true" if item is added', function () {
			let ll = new algolib.LinkedList();

			expect(ll.push(1)).to.be.true;
		});

		it('should return "false" if item is not added', function () {
			let ll = new algolib.LinkedList();

			expect(ll.push()).to.be.false;
		});
	});


	describe('#pop()', function () {
		it('should remove last list item', function () {
			let ll = new algolib.LinkedList();

			ll.push(1);
			ll.push(3);
			ll.push(2);

			ll.pop();
			expect(ll.getList().length).to.equal(2);

			ll.pop();
			expect(ll.getList().length).to.equal(1);

			ll.pop();
			expect(ll.getList().length).to.equal(0);
		});

		it('should return last list item', function () {
			let ll = new algolib.LinkedList();

			ll.push(1);
			ll.push(3);
			ll.push(2);

			expect(ll.pop()).to.equal(2);
			expect(ll.pop()).to.equal(3);
			expect(ll.pop()).to.equal(1);
		});

		it('should return "false" if there is no items in the list', function () {
			let ll = new algolib.LinkedList();

			expect(ll.pop()).to.be.false;
		});
	});


	describe('#add(<item>, <i>)', function () {
		it('should add <item> in list at <i> position', function () {
			let ll = new algolib.LinkedList();

			ll.add(1);
			ll.add(2, 0);
			ll.add(3, null);
			ll.add(4, 1);
			ll.add(5, 4);

			expect(ll.getList()).to.deep.equal([3, 4, 2, 1, 5]);
		});

		it('should return "true" if item is added', function () {
			let ll = new algolib.LinkedList();

			expect(ll.add(2)).to.be.true;
		});

		it('should not add item if <i> is greater then list length', function () {
			let ll = new algolib.LinkedList();

			ll.add(1, 1);
			expect(ll.getList().length).to.equal(0);

			ll.add(1);
			ll.add(1, 2);
			ll.add(1, 5);
			expect(ll.getList().length).to.equal(1);
		});

		it('should return "false" if item is not added', function () {
			let ll = new algolib.LinkedList();

			expect(ll.add()).to.be.false;
			expect(ll.add(1, 'jk')).to.be.false;
			expect(ll.add(1, '1')).to.be.false;
		});
	});


	describe('#remove(<i>)', function () {
		it('should remove element from list at <i> position', function () {
			let ll = new algolib.LinkedList();

			ll.push(1);
			ll.push(2);
			ll.push(3);
			ll.push(4);
			ll.push(5);

			ll.remove();
			expect(ll.getList()).to.deep.equal([2, 3, 4, 5]);

			ll.remove(3);
			expect(ll.getList()).to.deep.equal([2, 3, 4]);

			ll.remove(1);
			expect(ll.getList()).to.deep.equal([2, 4]);
		});

		it('should return value of removed item', function () {
			let ll = new algolib.LinkedList();

			ll.push(1);
			ll.push(2);
			ll.push(3);
			ll.push(4);
			ll.push(5);

			expect(ll.remove()).to.equal(1);
			expect(ll.remove(3)).to.equal(5);
			expect(ll.remove(1)).to.equal(3);
		});

		it('should return "false" if item is not removed or there is no item at <i> position', function () {
			let ll = new algolib.LinkedList();

			ll.push(1);
			ll.push(2);
			ll.push(3);

			expect(ll.remove(10)).to.be.false;
			expect(ll.remove('asd')).to.be.false;
		});
	});


	describe('Mixed test cases', function () {
		it('should be false', function () {
			let ll = new algolib.LinkedList();

			expect(ll.pop()).to.be.false;
		});

		it('should pass', function () {
			let ll = new algolib.LinkedList();

			ll.add(8);
			ll.push(1);
			ll.push(2);
			ll.add(3);
			ll.add(4, 2);
			ll.add(5, 5);
			ll.add(6, 7);

			expect(ll.getList()).to.deep.equal([3, 8, 4, 1, 2, 5]);
			expect(ll.pop()).to.equal(5);
			expect(ll.remove()).to.equal(3);
			expect(ll.remove()).to.equal(8);
			expect(ll.getList()).to.deep.equal([4, 1, 2]);
			expect(ll.remove(1)).to.equal(1);
			expect(ll.getList()).to.deep.equal([4, 2]);
			expect(ll.push(4)).to.be.true;
			expect(ll.getList()).to.deep.equal([4, 2, 4]);
			expect(ll.remove(2)).to.equal(4);
			expect(ll.getList()).to.deep.equal([4, 2]);
			expect(ll.add(8, 1)).to.be.true;
			expect(ll.getList()).to.deep.equal([4, 8, 2]);
			expect(ll.pop()).to.equal(2);
			expect(ll.getList()).to.deep.equal([4, 8]);
			expect(ll.remove()).to.equal(4);
			expect(ll.getList()).to.deep.equal([8]);
			expect(ll.push(4)).to.be.true;
			expect(ll.getList()).to.deep.equal([8, 4]);
		});
	});
});
