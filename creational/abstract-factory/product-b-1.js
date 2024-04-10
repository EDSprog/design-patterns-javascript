import { AbstractProductB } from './abstract-product-b.js';

export class ProductB1 extends AbstractProductB {
    constructor() {
        super();
        console.log('ProductB1 was created');
    }

    workWithProduct() {
        console.log('ProductB1 works');
    }
}
