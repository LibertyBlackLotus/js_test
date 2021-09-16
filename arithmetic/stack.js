/**
 * 堆栈 stack
 */

//基于数组的栈
/*class Stack {
	constructor() {
		this.items = [];
	}

	push(element){
		this.items.push(element);
	}

	pop(){
		return this.items.pop();
	}

	peek(){
		return this.items[this.items.length - 1];
	}

	isEmpty(){
		return this.items.length === 0;
	}

	size(){
		return this.items.length;
	}

	clear(){
		this.items = [];
	}
}

let stack = new Stack();
console.log(stack.isEmpty());
stack.push(50);
stack.push(30);
console.log(stack.size());
console.log(stack.peek());
stack.pop();
console.log(stack.size());
console.log(stack.peek());*/


// 基于对象的栈
/*class Stack {
	constructor() {
		this.count = 0;
		this.items = {};
	}

	push(element){
		this.items[this.count] = element;
		this.count ++;
	}

	pop(){
		if(this.isEmpty()){
			return undefined;
		}
		this.count --;
		const result = this.items[this.count];
		delete this.items[this.count];
		return result;
	}

	peek(){
		if(this.isEmpty()) return undefined;
		return this.items[this.count - 1];
	}

	size(){
		return this.count;
	}

	isEmpty(){
		return this.count === 0;
	}

	clear(){
		this.items = {};
		this.count = 0;
	}

}

let stack = new Stack();
stack.push(10);
stack.push(15);
let popValue = stack.pop();
console.log(popValue);
console.log(stack.peek());*/


// 基于WeakMap 的栈 可读性不强
/*
const items = new WeakMap();
class Stack {
	constructor() {
		item.set(this, []);
	}

	push(element){
		const s = items.get(this);
		s.push(element);
	}

	pop(){
		const s = items.get(this);
		const r = s.pop();
		return r;
	}

}*/
