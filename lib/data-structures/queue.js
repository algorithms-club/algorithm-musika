'use strict';

const LinkedList = require('./linked-list');

class Queue extends LinkedList {
	add (item) {
		return super.add(item);
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

module.exports = Queue;
