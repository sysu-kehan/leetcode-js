/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
	this.elements = [];
	this.size = 0;
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
	this.elements[this.size++] = val;
	return true;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
	var index = -1;
	for (var i = 0; i < this.size; i++) {
		if (this.elements[i] == val) {
			index = i;
			break;
		}
	}
	if (index < 0) {
		return false;
	}
	if (index > 0) {
		this.elements = this.elements.slice(0, index).concat(this.elements.slice(index + 1, this.size));
	} else {
		this.elements = this.elements.slice(1);
	}
	this.size--;
	return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
	return this.elements[Math.floor(Math.random() * this.size)];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var print = function(str) {
	console.log(str);
}

var obj = new RandomizedCollection();
print(obj.insert(2) == true);
print(obj.insert(3) == true);
print(obj.remove(4) == false);
print(obj.insert(3) == true);
print(obj.insert(4) == true);
print(obj.remove(2) == true);
print(obj.remove(2) == false);
print(obj.getRandom());
print(obj.getRandom());
print(obj.getRandom());
print(obj.getRandom());
print(obj.getRandom());
print(obj.getRandom());