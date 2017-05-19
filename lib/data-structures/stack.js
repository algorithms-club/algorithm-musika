'use strict';

const LinkedList = require('./linked-list');

class Stack extends LinkedList {
	add (item) {
		return super.push(item);
	}

	get () {
		return super.pop();
	}

	show () {
		return super.getList();
	}

	get length () {
		return super.getList().length;
	}

	get head () { return undefined; }
	get tail () { return undefined; }
}

module.exports = Stack;
