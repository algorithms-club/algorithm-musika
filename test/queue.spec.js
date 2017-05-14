'use qerict';

const Queue = require('../').Queue,
			expect = require('chai').expect;

describe('Queue', function () {
	describe('#show()', function () {
		it('should return an array', function () {
			let qe = new Queue();

			expect(qe.show()).to.be.an('Array');
		});

		it('should return array of queue items', function () {
			let qe = new Queue();

			qe._head = {val: 1, next: {val: 3, next: {val: 2}}};

			expect(qe.show().length).to.equal(3);
			expect(qe.show()).to.deep.equal([1, 3, 2]);
		});
	});


	describe('#length', function () {
		it('should return a number', function () {
			let qe = new Queue();

			expect(qe.length).to.be.a('Number');
		});

		it('should be equal a Queue length', function () {
			let qe = new Queue();

			qe._head = {val: 1, next: {val: 3, next: {val: 2}}};

			expect(qe.length).to.equal(3);
		});
	});


	describe('#add(<item>)', function () {
		it('should add <item> to the end of Queue', function () {
			let qe = new Queue();

			qe.add(1);
			expect(qe.show()).to.deep.equal([1]);

			qe.add(null);
			expect(qe.show()).to.deep.equal([null, 1]);

			qe.add(2);
			expect(qe.show()).to.deep.equal([2, null, 1]);
		});

		it('shouldn`t do anything if <item> is undefined', function () {
			let qe = new Queue(),
					a;

			qe.add();
			qe.add(undefined);
			qe.add(a);

			expect(qe.show().length).to.equal(0);
		});

		it('should return "true" if item is added', function () {
			let qe = new Queue();

			expect(qe.add(1)).to.be.true;
			expect(qe.add(null)).to.be.true;
			expect(qe.add('ass')).to.be.true;
			expect(qe.add(2)).to.be.true;
		});

		it('should return "false" if item is not added', function () {
			let qe = new Queue();

			expect(qe.add()).to.be.false;
		});
	});


	describe('#get()', function () {
		it('should remove first item in Queue', function () {
			let qe = new Queue();

			qe.add(1);
			qe.add(3);
			qe.add(2);

			qe.get();
			expect(qe.show().length).to.equal(2);

			qe.get();
			expect(qe.show().length).to.equal(1);

			qe.get();
			expect(qe.show().length).to.equal(0);
		});

		it('should return first item in Queue', function () {
			let qe = new Queue();

			qe.add(1);
			qe.add(3);
			qe.add(2);

			expect(qe.get()).to.equal(1);
			expect(qe.get()).to.equal(3);
			expect(qe.get()).to.equal(2);
		});

		it('should return "false" if Queue is empty', function () {
			let qe = new Queue();

			expect(qe.get()).to.be.false;
		});
	});
});
