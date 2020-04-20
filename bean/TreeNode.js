function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

/**
 * 从传入的二叉树节点开始按层序遍历的方式打印
 * @param {TreeNode} root 
 * @returns {number[]}
 */
function transArray(root) {
	if (root === null) {
		return [];
	}
	var result = [];
	var map = [];
	var list = [];
	list.push(root);
	var level = 0;
	map[level] = list;
	while (map[level].some(node => node !== null)) {
		var curList = map[level];
		level++;
		var nextLevelList = [];
		for (var i = 0; i < curList.length; i++) {
			var node = curList[i];
			if (node !== null) {
				nextLevelList.push(node.left);
				nextLevelList.push(node.right);
			} else {
				nextLevelList.push(null);
				nextLevelList.push(null);
			}
		}
		map[level] = nextLevelList;
	}
	for (var i = 0; i < level; i++) {
		var curList = map[i];
		for (var j = 0; j < curList.length; j++) {
			const node = curList[j];
			result.push(node !== null ? node.val : null);
		}
	}
	var lastIndex = result.length - 1;
	for (; result[lastIndex] === null; lastIndex--);
	return result.slice(0, lastIndex + 1);
}

/**
 * 
 * @param {[]} array 
 * @returns {TreeNode}
 */
function generateTree(array) {
	if (array.length <= 0) {
		return null;
	}
	var nodes = [];
	for (var i = 0; i < array.length; i++) {
		nodes[i + 1] = array[i] === null ? null : new TreeNode(array[i]);
	}
	for (var i = 1; i * 2 < nodes.length; i++) {
		if (nodes[i] !== null) {
			nodes[i].left = nodes[i * 2];
			nodes[i].right = i * 2 + 1 < nodes.length ? nodes[i * 2 + 1] : null;
		}
	}
	return nodes[1];
}

module.exports = {
	TreeNode,
	transArray,
	generateTree
};