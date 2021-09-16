/**
 * tree
 */

const Compare = {
	LESS_THAN: -1,
	BIGGER_THAN: 1,
	EQUALS: 0
};

function defaultCompare(a, b) {
	if (a === b) {
		return Compare.EQUALS;
	}
	return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

class Node {
	constructor(key) {
		this.key = key;
		this.left = null
		this.right = null;
	}
}

// 二叉搜索树
class BinarySearchTree {
	constructor(compareFn = defaultCompare) {
		this.compareFn = compareFn;
		this.root = null;
	}

	//插入键
	insert(key){
		if(this.root == null){
			this.root = new Node(key);
		}else{
			this.insertNode(this.root, key);
		}
	}

	insertNode(node, key){
		if(this.compareFn(key, node.key) === Compare.LESS_THAN){
			if(node.left == null){
				node.left = new Node(key);
			}else{
				this.insertNode(node.left, key);
			}
		}else{
			if(node.right == null){
				node.right = new Node(key);
			}else{
				this.insertNode(node.right, key);
			}
		}
	}

	// 中序遍历
	inOrderTraverse(callback){
		this.inOrderTraverseNode(this.root, callback);
	}

	inOrderTraverseNode(node, callback){
		if(node != null){
			this.inOrderTraverseNode(node.left, callback);
			callback(node.key);
			this.inOrderTraverseNode(node.right, callback);
		}
	}

	//先序遍历
	preOrderTraverse(callback){
		this.preOrderTraverseNode(this.root, callback);
	}

	preOrderTraverseNode(node, callback){
		if(node != null){
			callback(node.key);
			this.preOrderTraverseNode(node.left, callback);
			this.preOrderTraverseNode(node.right, callback);
		}
	}

	// 后序遍历
	postOrderTraverse(callback){
		this.postOrderTraverseNode(this.root, callback);
	}

	postOrderTraverseNode(node, callback){
		if(node != null){
			this.preOrderTraverseNode(node.left, callback);
			this.preOrderTraverseNode(node.right, callback);
			callback(node.key);
		}
	}

	// 最小键
	min(){
		return this.minNode(this.root);
	}

	minNode(node){
		let current = node;
		while(current != null && current.left != null){
			current = current.left;
		}
		return current;
	}

	//最大键
	max(){
		this.maxNode(this.root);
	}

	maxNode(node){
		let current = node;
		while(current != null && current.right != null){
			current = current.right;
		}
		return current;
	}

	//搜索键
	search(key){
		return this.searchNode(this.root, key);
	}

	searchNode(node, key){
		if(node == null){
			return false;
		}

		if(this.compareFn(key, node.key) === Compare.LESS_THAN){
			return this.searchNode(node.left, key);
		}else if(this.compareFn(key, node.key) === Compare.BIGGER_THAN){
			return this.searchNode(node.right, key);
		}else{
			return true;
		}
	}

	//移除键
	remove(key){
		this.root = this.removeNode(this.root, key);
	}

	removeNode(node, key){
		if(node == null){
			return null;
		}

		if(this.compareFn(key, node.key) === Compare.LESS_THAN){
			node.left = this.removeNode(node.left, key);
			return node;
		}else if(this.compareFn(key, node.key) === Compare.BIGGER_THAN){
			node.right = this.removeNode(node.right, key);
			return node;
		}else{
			//情况一
			if(node.left == null && node.right == null){
				node = null;
				return node;
			}

			//情况二
			if(node.left == null){
				node = node.right;
				return node;
			}else if(node.right == null){
				node = node.left;
				return node;
			}

			//情况三
			const aux = this.minNode(node.right);
			node.key = aux.key;
			node.right = this.removeNode(node.right, aux.key);
			return node;
		}
	}

}

/*let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
console.log(tree);

const printNode = (value) => console.log(value);
tree.inOrderTraverse(printNode);*/


// 自平衡树 AVL
class AVLTree extends BinarySearchTree{
	constructor(compareFn = defaultCompare) {
		super(compareFn);
		this.compareFn = compareFn;
		this.root = null;
	}

	//获取节点高度
	getNodeHeight(node){


	}

	// 计算平衡因子
	getBalanceFactor(node){

	}

}

// 红黑树
class RedBlackTree extends BinarySearchTree{
	constructor(compareFn = defaultCompare) {
		super(compareFn);
		this.compareFn = compareFn;
		this.root = null;
	}


}