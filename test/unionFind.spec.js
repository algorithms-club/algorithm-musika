'use strict';

const algolib = require('../index'),
			expect = require('chai').expect;

describe('#unionFind', function () {
	it('should create propper data structure', function (done) {
		let uf = new algolib.UnionFind();

		expect(uf.connect).to.be.instanceOf(Function);
		expect(uf.isConnected).to.be.instanceOf(Function);

		done();
	});


	it('should #isConnected return false if not connected', function (done) {
		let uf = new algolib.UnionFind();

		uf.connect(3, 6);
		expect(uf.isConnected(2, 6)).to.be.false;
		expect(uf.isConnected(2, 3, 6)).to.be.false;

		uf.connect(7, 8, 9);
		expect(uf.isConnected(7, 8, 3)).to.be.false;
		expect(uf.isConnected(7, 8, 9)).to.be.true;

		done();
	});


	it('should #isConnected return true if connected', function (done) {
		let uf = new algolib.UnionFind();

		uf.connect(3, 6);
		expect(uf.isConnected(3, 6), '(3, 6)').to.be.true;

		uf.connect(6, 9);
		expect(uf.isConnected(3, 9), '(6, 9)').to.be.true;

		uf.connect(6, 1);
		expect(uf.isConnected(1, 9), '(6, 1)').to.be.true;

		uf.connect(0, 1);
		expect(uf.isConnected(0, 3), '(0, 1)').to.be.true;

		uf.connect(2, 8, 7);
		expect(uf.isConnected(2, 7), '(2, 8, 7)').to.be.true;

		done();
	});


	it('#count should return quantity of used elements', function (done) {
		let uf = new algolib.UnionFind();

		expect(uf.count()).to.be.equal(0);

		uf.connect(1, 2);
		expect(uf.count()).to.be.equal(2);

		uf.connect(2, 6, 8);
		expect(uf.count()).to.be.equal(4);

		uf.connect(0, 12);
		expect(uf.count()).to.be.equal(6);

		done();
	});


	it('#componentSize should return quantity of elements in component', function (done) {
		let uf = new algolib.UnionFind();

		expect(uf.elementComponentSize(3)).to.equal(0);

		uf.connect(0, 1);
		expect(uf.elementComponentSize(0)).to.equal(2);
		expect(uf.elementComponentSize(3)).to.equal(0);

		uf.connect(2, 3, 4);
		expect(uf.elementComponentSize(3)).to.equal(3);
		expect(uf.elementComponentSize(0)).to.equal(2);
		expect(uf.elementComponentSize(5)).to.equal(0);

		uf.connect(1, 2);
		expect(uf.elementComponentSize(3)).to.equal(5);
		expect(uf.elementComponentSize(0)).to.equal(5);
		expect(uf.elementComponentSize(5)).to.equal(0);

		done();
	});


	it('#disconnect should remove elements form any component', function (done) {
		let uf = new algolib.UnionFind();

		uf.connect(1, 2, 3);
		uf.connect(4, 5);
		uf.connect(7, 8, 9, 10);

		uf.disconnect(10);
		expect(uf.count()).to.equal(8);
		expect(uf.elementComponentSize(7)).to.equal(3);
		expect(uf.elementComponentSize(10)).to.equal(0);

		uf.disconnect(1, 4, 7);
		expect(uf.count()).to.equal(5);
		expect(uf.elementComponentSize(2)).to.equal(2);
		expect(uf.elementComponentSize(5)).to.equal(1);
		expect(uf.elementComponentSize(8)).to.equal(2);
		expect(uf.elementComponentSize(4)).to.equal(0);

		done();
	});
});
