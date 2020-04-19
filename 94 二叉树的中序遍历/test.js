var {
	TreeNode,
	transArray,
	generateTree
} = require('../bean/TreeNode.js');
var {
	inorderTraversal,
	inorderTraversal1
} = require('./inorderTraversal.js');

function test1() {
	var node1 = generateTree([6, 2, 8, 1, 4, null, null, null, null, 3, 7]);
	var result11 = inorderTraversal(node1);
	var result12 = inorderTraversal1(node1);
	console.log(result11);
	console.log(result12);
}

module.exports = {
	test1
};