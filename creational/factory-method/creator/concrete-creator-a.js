import { AbstractCreator } from './abstract-creator.js';
import { ConcreteProductA } from '../product/concrete-product-a.js';

export class ConcreteCreatorA extends AbstractCreator {
    _factoryMethod() {
        return new ConcreteProductA();
    }
}
