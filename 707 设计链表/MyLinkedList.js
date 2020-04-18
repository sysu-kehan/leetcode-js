/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
	this.head = null;
	this.tail = null;
	this.size = 0;
};

var Node = function (val, prev, next) {
	this.val = val;
	this.prev = prev;
	this.next = next;
}

MyLinkedList.prototype.isIndexValid = function (index) {
	return index >= 0 && index < this.size;
}

MyLinkedList.prototype.isIndexValidForAdd = function (index) {
	return index >= 0 && index <= this.size;
}

MyLinkedList.prototype.getElement = function (index) {
	if (index < this.size >> 2) {
		var node = this.head;
		for (var i = 0; i < index; i++, node = node.next);
		return node;
	} else {
		var node = this.tail;
		for (var i = this.size - 1; i > index; i--, node = node.prev);
		return node;
	}
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
	if (!this.isIndexValid(index)) {
		return -1;
	}
	var node = this.getElement(index);
	return node.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
	const h = this.head;
	const newNode = new Node(val, null, h);
	this.head = newNode;
	if (h == null) {
		this.tail = newNode;
	} else {
		h.prev = newNode;
	}
	this.size++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
	const t = this.tail;
	const newNode = new Node(val, t, null);
	this.tail = newNode;
	if (t == null) {
		this.head = newNode;
	} else {
		t.next = newNode;
	}
	this.size++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
	if (!this.isIndexValidForAdd(index)) {
		return;
	}
	if (index == this.size) {
		this.addAtTail(val);
		return;
	}
	const node = this.getElement(index);
	const prev = node.prev;
	const next = node.next;
	const newNode = new Node(val, prev, node);
	node.prev = newNode;
	if (prev == null) {
		this.head = newNode;
	} else {
		prev.next = newNode;
	}
	this.size++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
	if (!this.isIndexValid(index)) {
		return;
	}
	const node = this.getElement(index);
	const prev = node.prev;
	const next = node.next;
	if (prev == null) {
		this.head = next;
	} else {
		prev.next = next;
		node.prev = null;
	}
	if (next == null) {
		this.tail = prev;
	} else {
		next.prev = prev;
		node.next = null;
	}
	this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

print = function (str) {
	console.log(str);
}

var obj = new MyLinkedList();
print(obj.get(0) == -1);
obj.addAtHead(1);
obj.addAtTail(2);
obj.addAtIndex(1, 3);
obj.addAtIndex(3, 4);
print(obj.get(0) == 1);
print(obj.get(1) == 3);
print(obj.get(2) == 2);
print(obj.get(3) == 4);
obj.deleteAtIndex(0);
print(obj.get(0) == 3);
obj.deleteAtIndex(1);
print(obj.get(1) == 4);
obj.deleteAtIndex(1);
print(obj.get(1) == -1);

