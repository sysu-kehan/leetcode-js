var {
	TreeNode,
	transArray,
	generateTree
} = require('../bean/TreeNode.js');
var {
	levelOrder
} = require('./levelOrder.js');

var node1 = generateTree([3, 9, 20, null, null, 15, 7]);
console.log(levelOrder(node1));