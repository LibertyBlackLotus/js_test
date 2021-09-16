/**
 * set
 */

/*
class MySet{
	constructor() {
		this.items = {};
	}

	has(element){
		return Object.prototype.hasOwnProperty.call(this.items, element);
	}

	add(element){
		if( !this.has(element) ){
			this.items[element] = element;
			return true;
		}
		return false;
	}

	delete(element){
		if(this.has(element)){
			delete this.items[element];
			return true;
		}
		return false;
	}

	values(){
		return Object.values(this.items);
	}

	size(){
		return Object.keys(this.items).length;
	}

	clear(){
		this.items = {};
	}

	union(otherSet){
		let unionSet = new MySet();
		this.values().forEach( value => {
			unionSet.add(value);
		});
		otherSet.values().forEach( value => {
			unionSet.add(value);
		});
		return unionSet;
	}

	intersection(otherSet){
		let intersectionSet = new MySet();
		let values = this.values();
		let otherValues = otherSet.values();
		let biggerSet = values;
		let smallerSet = otherValues;

		if(otherValues.length - values.length > 0){
			biggerSet = otherValues;
			smallerSet = values;
		}

		smallerSet.forEach( value => {
			if (biggerSet.includes(value)){
				intersectionSet.add(value);
			}
		});
		return intersectionSet;
	}

	difference(otherSet){
		let differenceSet = new MySet();
		this.values().forEach(value => {
			if( !otherSet.has(value) ){
				differenceSet.add(value);
			}
		});
		return differenceSet;
	}

	isSubsetOf(otherSet){
		if(this.size() > otherSet.size()) return false;

		let isSubset = true;
		this.values().every(value => {
			if( !otherSet.has(value) ){
				isSubset = false;
				return false;
			}
			return true;
		});
		return isSubset;
	}

}

let setA = new MySet();
setA.add(1);
setA.add(2);
setA.add(15);
setA.add(10);

let setB = new MySet();
setB.add(2);
setB.add(3);
setB.add(4);
setB.add(10);

let unionAB = setA.union(setB);
console.log(unionAB.values());
console.log(setA.values());
console.log(setB.values());

let intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());

let differenceAB = setA.difference(setB);
console.log(differenceAB.values());*/
