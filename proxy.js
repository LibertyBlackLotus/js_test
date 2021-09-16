
/**
 * proxy
 */ 

/* var obj = { a: 1 },
    handlers = {
		get(target, key, context){
			console.log('accessing: ', key);
			return Reflect.get(
				target, key, context
			);
		}
	},
	pobj = new Proxy( obj, handlers );

console.log(obj.a);
console.log(pobj.a); */

/* var handlers = {
	getOwnPropertyDescriptor(target, prop){
		console.log('getOwnPropertyDescriptor');
		return Object.getOwnPropertyDescriptor(
			target, prop
		);
	},
	defineProperty(target, prop, desc){
		console.log('defineProperty');
		return Object.defineProperty(
			target, prop, desc
		);
	}
},
proxy = new Proxy({}, handlers);
proxy.a = 2; */ 


