/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST1 = function(root, val) {
	if (root === null) {
		return new TreeNode(val);
	}
	if (val > root.val) {
		root.right = insertIntoBST1(root.right, val);
	} else if (val < root.val) {
		root.left = insertIntoBST1(root.left, val);
	}
	return root;
};
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
	var node = root;
	var newNode = new TreeNode(val);
	if (node === null) {
		return newNode;
	}
	while (node.val !== val) {
		if (val > node.val) {
			if (node.right === null) {
				node.right = newNode;
			} else {
				node = node.right;
			}
		} else {
			if (node.left === null) {
				node.left = newNode;
			} else {
				node = node.left;
			}
		}
	}
	return root;
};