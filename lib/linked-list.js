'use strict';

class LinkedList {
	constructor() {
		this._head = {};
		this._tail = this._head;
		this._pretail = null;
	}


	_setLast () {
		this._pretail = null;
		this._tail = this._head;

		while (this._tail.next) {
			this._pretail = this._tail;
			this._tail = this._tail.next;
		}
	}


	getList () {
		let item = this._head,
				res = [];

		while (item && item.val !== undefined) {
			res.push(item.val);
			item = item.next;
		}

		return res;
	}


	pop () {
		let res = this._tail;

		if (this._pretail) {
			delete this._pretail.next;
			this._setLast();

		} else {
			this._tail = this._head = {};
		}

		if (res.val !== undefined) { return res.val; }
		else { return false; }
	}


	push (item) {
		if (item === undefined) { return false; }

		if (!Object.keys(this._head).length) {
			this._head.val = item;

		} else {
			this._tail.next = {val: item};
			this._pretail = this._tail;
			this._tail = this._tail.next;
		}

		return true;
	}


	add (item, i) {
		let currentItem = this._head,
				nextItem = currentItem.next,
				currentIndex = 0;

		if (item === undefined
		|| (i && isNaN(i))
		|| this.getList().length < i) { return false; }

		if (!i) {
			this._head = {
				val: item,
				next: this._head.val ? this._head : undefined
			};
			this._setLast();
			return true;
		}

		while (currentIndex < (i - 1)) {
			currentItem = currentItem.next;
			nextItem = currentItem.next;
			currentIndex++;
		}

		currentItem.next = {val: item};
		currentItem.next.next = nextItem;
		this._setLast();
		return true;
	}


	remove (i) {
		let currentItem = this._head,
				nextItem = currentItem.next,
				prevItem,
				currentIndex = 0;

		if ((i && isNaN(i))
		|| this.getList().length < (i - 1)) { return false; }

		while (currentIndex < i) {
			prevItem = currentItem;
			currentItem = currentItem.next;
			nextItem = currentItem.next;
			currentIndex++;
		}

		if (!nextItem) { return this.pop(); }
		if (prevItem) { prevItem.next = nextItem; }
		if (!prevItem) { this._head = nextItem; }

		this._setLast();
		return currentItem.val;
	}
}

module.exports = LinkedList;
