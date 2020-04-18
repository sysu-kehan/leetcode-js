function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
};

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
var searchBST = function (root, val) {
	while (root != null && root.val != val) {
		root = val > root.val ? root.right : root.left;
	}
	return root;
};
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST1 = function (root, val) {
	if (root == null) {
		return null;
	}
	if (root.val == val) {
		return root;
	}
	return val > root.val ? searchBST1(root.right, val) : searchBST1(root.left, val);
};