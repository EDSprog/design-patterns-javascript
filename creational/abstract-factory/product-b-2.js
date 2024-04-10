import { AbstractProductB } from './abstract-product-b.js';

export class ProductB2 extends AbstractProductB {
    constructor() {
        super();
        console.log('ProductB2 was created');
    }

    workWithProduct() {
        console.log('ProductB2 works');
    }
}
