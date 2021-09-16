/**
 * linked list
 */

// import { defaultEquals } from '../util';
// import { Node } from './node.js';

function defaultEquals(a, b) {
	return a === b;
}

class Node {
	constructor(element) {
		this.element = element;
		this.next = undefined;
	}
}

class LinkedList {
	constructor(equalsFn = defaultEquals) {
		this.count = 0;
		this.head = undefined;
		this.equalsFn = equalsFn;
	}

	push(element){
		const node = new Node(element);
		let current;
		if(this.head == null){
			this.head = node;
		}else{
			current = this.head;
			while (current.next != null){
				current = current.next;
			}
			current.next = node;
		}
		this.count ++;
	}

	removeAt(index){
		if(index >= 0 && index < this.count){
			let current = this.head;

			if(index === 0){
				this.head = this.head.next;
			}else{
				let previous = this.getElementAt(index - 1);
				current = previous.next;
				previous.next = current.next;
			}
			this.count --;
			return current.element;
		}
		return undefined;
	}

	getElementAt(index){
		if(index >= 0 && index < this.count){
			let node = this.head;
			for (let i = 0; i < index && node != null; i ++){
				node = node.next;
			}
			return node;
		}
		return undefined;
	}

	insert(element, index){

	}

	indexOf(element){

	}

	remove(element){

	}

	size(){

	}

	isEmpty(){

	}

	getHead(){
		return this.head;
	}


}

let list = new LinkedList();
list.push(15);
list.push(10);
console.log(list);