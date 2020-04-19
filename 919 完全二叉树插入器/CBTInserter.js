/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var CBTInserter = function(root) {
	this.elements = [];
	if (root !== null) {
		var queue = [];
		queue.push(root);
		while (queue.length > 0) {
			var node = queue.shift();
			this.elements.push(node.val);
			if (node.left !== null) {
				queue.push(node.left);
			}
			if (node.right !== null) {
				queue.push(node.right);
			}
		}
	}
};

/** 
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
	this.elements.push(v);
	var index = this.elements.length - 1;
	var level = 0;
	//  计算插入节点属于树的哪一层
	for (var sum = 1; index > sum - 1; level++, sum += Math.pow(2, level));
	//  处于第0层，没有父节点
	if (level == 0) {
		return -1;
	}
	//  计算插入节点属于层的第几个节点
	var pos = index - (Math.pow(2, level) - 1);
	//  计算插入节点的父节点是上一层的第几个
	var parentPos = Math.floor(pos / 2);
	//  计算上一层的起始下标
	var parentBeginIndex = Math.pow(2, level - 1) - 1;
	//  计算插入节点的父节点下标
	return this.elements[parentBeginIndex + parentPos];
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
	if (this.elements.length <= 0) {
		return null;
	}
	var root = new TreeNode(this.elements[0]);
	var queue = [root];
	for (var i = 1; i < this.elements.length; i++) {
		var node = queue.shift();
		node.left = new TreeNode(this.elements[i]);
		queue.push(node.left);
		i++;
		if (i < this.elements.length) {
			node.right = new TreeNode(this.elements[i]);
			queue.push(node.right);
		}
	}
	return root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */
