'use strict';

class UnionFind {
	constructor () {
		this._elements = [];
	}

	connect (...args) {
		let a = args.shift(),
				b = args[0],
				more = args.length > 1;

		if (this.isConnected(a, b)) {
			if (more) { this.connect.apply(this, args); }
			return;
		}

		[a, b].forEach((elem)=>{
			if(isNaN(this._elements[elem])) {
				this._elements[elem] = elem;
			}
		});

		this._elements = this._elements.map((elem)=>{
			if (elem === this._elements[a]) { return this._elements[b]; }

			return elem;
		});

		if (more) { this.connect.apply(this, args); }
	}


	disconnect (...elems) {
		for (let elem of elems) {
			delete this._elements[elem];
		}
	}


	isConnected (...args) {
		let val = this._elements[args[0]],
				result = true;

		args.forEach(elem=>{
			if(isNaN(this._elements[elem]) || this._elements[elem] !== val) { result = false; }
		});

		return result;
	}


	count () {
		return this._elements.reduce((res, cur)=>{
			return isNaN(cur) ? res : ++res;
		}, 0);
	}

	elementComponentSize (elem) {
		if (isNaN(this._elements[elem])) { return 0; }
		let elemComponentNum = this._elements[elem];

		return this._elements.reduce((res, cur)=>{
			return cur === elemComponentNum ? ++res : res;
		}, 0);
	}
}

module.exports = UnionFind;
