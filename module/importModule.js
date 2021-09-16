import { cube, foo, graph, myModule } from './myModule.js';

graph.options = {
	color:'blue',
	thickness:'3px'
};

graph.draw();
console.log(cube(3)); // 27
console.log(foo);


myModule.add();  // 与 importModule2 中是一个实例