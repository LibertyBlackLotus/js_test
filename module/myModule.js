function cube(x) {
	return x * x * x;
}

const foo = Math.PI + Math.SQRT2;

var graph = {
	options: {
		color:'white',
		thickness:'2px'
	},
	draw: function() {
		console.log('From graph draw function');
	}
}

function MyModule(){
	this.sum = 0;
	this.add = function () {
		this.sum += 1;
	};
	this.show = function () {
		console.log(this.sum);
	};
}
let myModule = new MyModule();

export { cube, foo, graph, myModule };