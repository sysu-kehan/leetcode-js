var {
	TreeNode,
	transArray,
	generateTree
} = require('../bean/TreeNode.js');
var {
	levelOrder
} = require('./levelOrder.js');

function test1() {
	var node1 = generateTree([3, 9, 20, null, null, 15, 7]);
	var result = levelOrder(node1);
	console.log();
}

module.exports = {
	test1
};