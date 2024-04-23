import { AbstractBuilder } from './abstract-builder.js';
import { Product } from '../product.js';

export class ConcreteBuilder extends AbstractBuilder {
    constructor() {
        super();
        this.product = new Product();
    }

    buildPartA() {
        console.log('Building part A');
        this.product.add('Part A');
    }

    buildPartB() {
        console.log('Building part B');
        this.product.add('Part B');
    }

    buildPartC() {
        console.log('Building part C');
        this.product.add('Part C');
    }

    getResult() {
        return this.product;
    }
}
