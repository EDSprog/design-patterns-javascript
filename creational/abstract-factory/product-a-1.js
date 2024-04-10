import { AbstractProductA } from './abstract-product-a.js';

export class ProductA1 extends AbstractProductA {
    constructor() {
        super();
        console.log('ProductA1 was created');
    }

    workWithProduct() {
        console.log('ProductA1 works');
    }
}
