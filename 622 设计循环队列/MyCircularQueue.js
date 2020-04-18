/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
	this.elements = [];
	this.length = k;
	this.head = 0;
	this.tail = 0;
	this.size = 0;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
	if (this.isFull()) {
		return false;
	}
	this.elements[this.tail++] = value;
	if (this.tail >= this.length) {
		this.tail = 0;
	}
	this.size++;
	return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
	if (this.isEmpty()) {
		return false;
	}
	this.head = this.head == this.length - 1 ? 0 : this.head + 1;
	this.size--;
	return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
	return this.isEmpty() ? -1 : this.elements[this.head];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
	return this.isEmpty() ? -1 : this.elements[this.tail == 0 ? this.length - 1 : this.tail - 1];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
	return this.size == 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
	return this.size == this.length;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

var print = function(str) {
	console.log(str);
};

var circularQueue = new MyCircularQueue(3); // 设置长度为 3

print(circularQueue.enQueue(1)); // 返回 true

print(circularQueue.enQueue(2)); // 返回 true

print(circularQueue.enQueue(3)); // 返回 true

print(circularQueue.enQueue(4) == false); // 返回 false，队列已满

print(circularQueue.Rear() == 3); // 返回 3

print(circularQueue.isFull()); // 返回 true

print(circularQueue.deQueue()); // 返回 true

print(circularQueue.enQueue(4)); // 返回 true

print(circularQueue.Rear() == 4); // 返回 4