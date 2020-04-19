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
		nodes[i] = array[i] === null ? null : new TreeNode(array[i]);
	}
	//  计算树一共有几层
	var totalLevel = 0;
	for (var sum = 1; array.length > sum; totalLevel++, sum += Math.pow(2, totalLevel));
	var levels = [];
	levels[0] = 1;
	for (var i = 1; i <= totalLevel; i++) {
		levels[i] = Math.pow(2, i) + levels[i - 1];
	}
	//  构造根节点
	var root = nodes[0];
	var rootLeftChildIndex = 1;
	var rootRightChildIndex = rootLeftChildIndex + 1;
	root.left = rootLeftChildIndex < nodes.length ? nodes[rootLeftChildIndex] : null;
	root.right = rootRightChildIndex < nodes.length ? nodes[rootRightChildIndex] : null;

	var curLevel = 1;
	for (var i = 1; i < nodes.length; i++) {
		if (i + 1 > levels[curLevel]) {
			curLevel++;
		}
		if (nodes[i] !== null && curLevel < totalLevel) {
			var curPos = i - levels[curLevel - 1];
			var childPos = curPos * 2;
			var leftChildIndex = levels[curLevel] + childPos;
			var rightChildIndex = leftChildIndex + 1;
			nodes[i].left = leftChildIndex < nodes.length ? nodes[leftChildIndex] : null;
			nodes[i].right = rightChildIndex < nodes.length ? nodes[rightChildIndex] : null;
		}
	}
	return root;
}

module.exports = {
	TreeNode,
	transArray,
	generateTree
};