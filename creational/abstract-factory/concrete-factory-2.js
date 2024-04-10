import { AbstractFactory } from './abstract-factory.js';
import { ProductA2 } from './product-a-2.js';
import { ProductB2 } from './product-b-2.js';

export class ConcreteFactory2 extends AbstractFactory {
    createProductA() {
        return new ProductA2();
    }

    createProductB() {
        return new ProductB2();
    }
}
