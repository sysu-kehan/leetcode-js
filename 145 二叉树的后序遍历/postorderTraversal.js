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
var postorderTraversal = function(root) {
	var result = [];
	var index = 0;
	var stack = [];
	var tail = -1;
	if (root !== null) {
		stack[++tail] = root;
	}
	while (tail >= 0) {
		var node = stack[tail--];
		result[index++] = node.val;
		if (node.left != null) {
			stack[++tail] = node.left;
		}
		if (node.right != null) {
			stack[++tail] = node.right;
		}
	}
	return result.reverse();
};
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal1 = function(root) {
	return root !== null ? [...postorderTraversal1(root.left), ...postorderTraversal1(root.right), root.val] : [];
};