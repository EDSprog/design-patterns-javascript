import { AbstractCreator } from './abstract-creator.js';
import { ConcreteProductB } from '../product/concrete-product-b.js';

export class ConcreteCreatorB extends AbstractCreator {
    _factoryMethod() {
        return new ConcreteProductB();
    }
}
