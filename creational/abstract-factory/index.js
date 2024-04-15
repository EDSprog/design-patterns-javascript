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

/**
 * Output:
 * Client: Testing with ConcreteFactory1
 * ProductA1 was created
 * ProductA1 works
 * ProductB1 was created
 * ProductB1 works
 * Client: Testing with ConcreteFactory2
 * ProductA2 was created
 * ProductA2 works
 * ProductB2 was created
 * ProductB2 works
 */
