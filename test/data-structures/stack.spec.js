'use strict';

const Stack = require('../../').Stack,
			expect = require('chai').expect;

describe('Stack', function () {
	describe('#show()', function () {
		it('should return an array', function () {
			let st = new Stack();

			expect(st.show()).to.be.an('Array');
		});

		it('should return array of stack items', function () {
			let st = new Stack();

			st._head = {val: 1, next: {val: 3, next: {val: 2}}};

			expect(st.show().length).to.equal(3);
			expect(st.show()).to.deep.equal([1, 3, 2]);
		});
	});


	describe('#length', function () {
		it('should return a number', function () {
			let st = new Stack();

			expect(st.length).to.be.a('Number');
		});

		it('should be equal a stack length', function () {
			let st = new Stack();

			st._head = {val: 1, next: {val: 3, next: {val: 2}}};

			expect(st.length).to.equal(3);
		});
	});


	describe('#add(<item>)', function () {
		it('should add <item> to stack', function () {
			let st = new Stack();

			st.add(1);
			expect(st.show()).to.deep.equal([1]);

			st.add(null);
			expect(st.show()).to.deep.equal([1, null]);

			st.add(2);
			expect(st.show()).to.deep.equal([1, null, 2]);
		});

		it('shouldn`t do anything if <item> is undefined', function () {
			let st = new Stack(),
					a;

			st.add();
			st.add(undefined);
			st.add(a);

			expect(st.show().length).to.equal(0);
		});

		it('should return "true" if item is added', function () {
			let st = new Stack();

			expect(st.add(1)).to.be.true;
		});

		it('should return "false" if item is not added', function () {
			let st = new Stack();

			expect(st.add()).to.be.false;
		});
	});


	describe('#get()', function () {
		it('should remove top item from stack', function () {
			let st = new Stack();

			st.add(1);
			st.add(3);
			st.add(2);

			st.get();
			expect(st.show().length).to.equal(2);

			st.get();
			expect(st.show().length).to.equal(1);

			st.get();
			expect(st.show().length).to.equal(0);
		});

		it('should return top item of stack', function () {
			let st = new Stack();

			st.add(1);
			st.add(3);
			st.add(2);

			expect(st.get()).to.equal(2);
			expect(st.get()).to.equal(3);
			expect(st.get()).to.equal(1);
		});

		it('should return "false" if stack is empty', function () {
			let st = new Stack();

			expect(st.get()).to.be.false;
		});
	});
});
