
/**
 * proxy
 */ 

var obj = { a: 1, b: 2 };
var handlers = {
    get(target, key, context){
        console.log('get: ', target, key, context);
        return target[key]
    },

    set(target, key, value){
        console.log('set: ', target, key, value);
        target[key] = value
        return true;
    }
};
var pobj = new Proxy( obj, handlers );

console.log(obj.a);
console.log(pobj.a);

pobj.c = 3;
console.log(obj);
console.log(pobj);


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


