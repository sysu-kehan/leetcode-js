/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
	this.elements = [];
	this.head = 0;
	this.tail = 0;
	this.size = 0;
	this.length = k;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
	if (this.isFull()) {
		return false;
	}
	this.head = this.head == 0 ? this.length - 1 : this.head - 1;
	this.elements[this.head] = value;
	this.size++;
	return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
	if (this.isFull()) {
		return false;
	}
	this.elements[this.tail] = value;
	this.tail = this.tail == this.length - 1 ? 0 : this.tail + 1;
	this.size++;
	return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
	if (this.isEmpty()) {
		return false;
	}
	this.head = this.head == this.length - 1 ? 0 : this.head + 1;
	this.size--;
	return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
	if (this.isEmpty()) {
		return false;
	}
	this.tail = this.tail == 0 ? this.length - 1 : this.tail - 1;
	this.size--;
	return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
	return this.isEmpty() ? -1 : this.elements[this.head];
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
	return this.isEmpty() ? -1 : this.elements[this.tail == 0 ? this.length - 1 : this.tail - 1];
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
	return this.size == 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
	return this.size == this.length;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

var print = function(anything) {
	console.log(anything);
};

var circularDeque = new MyCircularDeque(3); // 设置容量大小为3
print(circularDeque.insertLast(1));			        // 返回 true
print(circularDeque.insertLast(2));			        // 返回 true
print(circularDeque.insertFront(3));			        // 返回 true
print(circularDeque.insertFront(4) == false);			        // 已经满了，返回 false
print(circularDeque.getRear() == 2);  				// 返回 2
print(circularDeque.isFull());				        // 返回 true
print(circularDeque.deleteLast());			        // 返回 true
print(circularDeque.insertFront(4));			        // 返回 true
print(circularDeque.getFront() == 4);				// 返回 4