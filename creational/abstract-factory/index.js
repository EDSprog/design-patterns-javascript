import { ConcreteFactory1 } from './factories/concrete-factory-1.js';
import { ConcreteFactory2 } from './factories/concrete-factory-2.js';

// The client code works with factories and products only through abstract types: AbstractFactory and AbstractProduct.
// This lets you pass any factory to the client code without breaking it.
// The client code can work with any concrete factory and product variant.
function client(factory) {
    factory.createProductA().workWithProduct();
    factory.createProductB().workWithProduct();
}

console.log('Client: Testing with ConcreteFactory1');
const factory1 = new ConcreteFactory1();
client(factory1);

console.log('Client: Testing with ConcreteFactory2');
const factory2 = new ConcreteFactory2();
client(factory2);
