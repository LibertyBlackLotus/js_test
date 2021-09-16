/**
 * hash table
 */

function defaultToString(item) {
	if(item === null){
		return 'NULL';
	} else if(item === undefined){
		return 'UNDEFINED';
	} else if(typeof item === 'string' || item instanceof String){
		return `${item}`;
	}
	return item.toString();
}

class HashTable {
	constructor(toStrFn = defaultToString) {
		this.toStrFn = toStrFn;
		this.table = {};
	}

	loseloseHashCode(key){
		if(typeof key === 'number'){
			return key;
		}
		const tableKey = this.toStrFn(key);
		let hash = 0;
		for(let i = 0; i < tableKey.length; i ++){
			hash += tableKey.charCodeAt(i);
		}
		return hash % 37;
	}

	hashCode(key){
		return this.loseloseHashCode(key);
	}

	put(key, value){

	}

	get(key){

	}

	remove(key){

	}



}