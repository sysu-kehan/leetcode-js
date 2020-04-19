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
var inorderTraversal = function (root) {
	var result = [];
	var stack = [];
	var tail = -1;
	var node = root;
	while (node != null || tail >= 0) {
		while (node != null) {
			stack[++tail] = node;
			node = node.left;
		}
		node = stack[tail--];
		result.push(node.val);
		node = node.right;
	}
	return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal1 = function (root) {
	return root !== null ? [...inorderTraversal1(root.left), root.val, ...inorderTraversal1(root.right)] : [];
};

module.exports = {
	inorderTraversal,
	inorderTraversal1
};