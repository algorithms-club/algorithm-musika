'use strict';

class LinkedListItem {
	/**
	 * Creates an instance of LinkedListItem.
	 * @param {any} val
	 * @param {object} [prev]
	 * @param {object} [next]
	 *
	 * @memberof LinkedListItem
	 */
	constructor (val, prev, next) {
		this.val = val;
		this.prev = prev;
		this.next = next;
	}
}

class LinkedList {
	constructor () {
		this._head = {};
		this._tail = this._head;
	}

	get head() {
		return this._head;
	}

	get tail() {
		return this._tail;
	}

	_defineTail () {
		this._tail = this._tail || this._head;

		while (this._tail.next) {
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


	push (item) {
		if (item === undefined) { return false; }

		if (!Object.keys(this._head).length) {
			this._head = new LinkedListItem(item);
			this._tail = this._head;

		} else {
			this._tail.next = new LinkedListItem(item, this._tail);
			this._tail = this._tail.next;
		}

		return true;
	}


	pop () {
		let res = this._tail;

		if (this._tail !== this._head) {
			this._tail = this._tail.prev;
			delete this._tail.next;

		} else {
			this._tail = this._head = {};
		}

		if (res.val !== undefined) { return res.val; }
		else { return false; }
	}


	add (item, i) {
		let currentItem = this._head,
				nextItem = currentItem.next,
				currentIndex = 0;

		if (item === undefined
		|| (i && isNaN(i))
		|| this.getList().length < i) { return false; }

		if (!i) {
			let next = this._head.val ? this._head : undefined;

			this._head = new LinkedListItem(item, undefined, next);
			this._defineTail();
			return true;
		}

		while (currentIndex < (i - 1)) {
			currentItem = currentItem.next;
			currentIndex++;
		}

		nextItem = currentItem.next;
		currentItem.next = new LinkedListItem(item, currentItem, nextItem);

		if (nextItem) {
			nextItem.prev = currentItem.next;
		}

		this._defineTail();
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
			currentItem = currentItem.next;
			currentIndex++;
		}

		prevItem = currentItem.prev;
		console.log(currentItem.prev == prevItem);
		nextItem = currentItem.next;

		if (!nextItem) { return this.pop(); }
		if (prevItem) {
			prevItem.next = nextItem;
			nextItem.prev = prevItem;

		} else {
			this._head = nextItem;
			delete nextItem.prev;
		}

		this._defineTail();
		return currentItem.val;
	}
}

module.exports = LinkedList;
