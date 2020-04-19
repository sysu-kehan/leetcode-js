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
var preorderTraversal = function(root) {
	var result = [];
	var stack = [];
	var tail = -1;
	var node = root;
	while (node !== null || tail >= 0) {
		while (node !== null) {
			result.push(node.val);
			stack[++tail] = node.right;
			node = node.left;
		}
		node = stack[tail--];
	}
	return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal1 = function(root) {
	return root !== null ? [root.val, ...preorderTraversal1(root.left), ...preorderTraversal1(root.right)] : [];
};