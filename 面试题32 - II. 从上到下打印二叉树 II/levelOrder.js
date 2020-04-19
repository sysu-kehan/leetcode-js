var {
	TreeNode
} = require('../bean/TreeNode.js');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
	if (root === null) {
		return [];
	}
	var result = [];
	var queue = [root];
	var nextQueue = [];
	var temp = [];
	while (queue.length > 0) {
		const node = queue.shift();
		if (node.left !== null) {
			nextQueue.push(node.left);
		}
		if (node.right !== null) {
			nextQueue.push(node.right);
		}
		temp.push(node.val);
		if (queue.length <= 0) {
			if (nextQueue.length > 0) {
				queue = queue.concat(nextQueue);
				nextQueue.length = 0;
			}
			result.push([].concat(temp));
			temp.length = 0;
		}
	}
	return result;
};

module.exports = {
	levelOrder
};