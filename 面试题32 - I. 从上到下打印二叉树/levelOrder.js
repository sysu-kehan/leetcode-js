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
 * @return {number[]}
 */
var levelOrder = function(root) {
	if (root === null) {
		return [];
	}
	var queue = [root];
	var result = [];
	while (queue.length > 0) {
		const node = queue.shift();
		if (node.left !== null) {
			queue.push(node.left);
		}
		if (node.right !== null) {
			queue.push(node.right);
		}
		result.push(node.val);
	}
	return result;
};

module.exports = {
	levelOrder
};