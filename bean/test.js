var {
	transArray,
	generateTree
} = require('./TreeNode.js');

function test1() {
	var node1 = generateTree([1, null, 2, null, null, 3]);
	var node2 = generateTree([10, 9, 8, 7, 6, 5, 4, null, null, null, null, null, null, null, 3]);
	console.log(transArray(node1));
	console.log(transArray(node2));
}

module.exports = {
	test1
};