import { AbstractFactory } from './abstract-factory.js';
import { ProductA1 } from '../products/product-a-1.js';
import { ProductB1 } from '../products/product-b-1.js';

export class ConcreteFactory1 extends AbstractFactory {
    createProductA() {
        return new ProductA1();
    }

    createProductB() {
        return new ProductB1();
    }
}
