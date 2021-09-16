/**
 * dictionary
 */


/*
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

class MyDictionary {
	constructor(toStrFn = defaultToString) {
		this.toStrFn = toStrFn;
		this.table = {};
	}

	hasKey(key){
		return this.table[this.toStrFn(key)] != null;
	}

	set(key, value){
		if(key != null && value != null){
			const tableKey = this.toStrFn(key);
			this.table[tableKey] = new ValuePair(key, value);
			return true;
		}
		return false;
	}

	remove(key){
		if(this.hasKey(key)){
			delete this.table[this.toStrFn(key)];
			return true;
		}
		return false;
	}

	get(key){
		const valuePair = this.table[this.toStrFn(key)];
		return valuePair == null? undefined : valuePair.value;
	}

	keyValues(){
		return Object.values(this.table);
	}

	keys(){
		return this.keyValues().map( valuePair => valuePair.key );
	}

	values(){
		return this.keyValues().map( valuePair => valuePair.value );
	}

	forEach(callbackFn){
		const valuePairs = this.keyValues();
		for(let i = 0; i < valuePairs.length; i ++){
			const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
			if(result === false){
				break;
			}
		}
	}

	size(){
		return Object.keys(this.table).length;
	}

	isEmpty(){
		return this.size() === 0;
	}

	clear(){
		this.table = {};
	}

}

class ValuePair{
	constructor(key, value) {
		this.key = key;
		this.value = value;
	}

	toString(){
		return `[#${this.key}: ${this.value}]`;
	}
}


const dictionary = new MyDictionary();
dictionary.set('Wanling', 'hahaha');
dictionary.set('Shaowen', 'xixixi');

console.log(dictionary.hasKey('Wanling'));
console.log(dictionary.size());
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.keyValues());
dictionary.forEach((k, v) => {
	console.log('forEach: ', `key: ${k}, value: ${v}`);
});
*/

