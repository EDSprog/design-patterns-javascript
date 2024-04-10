import { AbstractProductA } from './abstract-product-a.js';

export class ProductA2 extends AbstractProductA {
    constructor() {
        super();
        console.log('ProductA2 was created');
    }

    workWithProduct() {
        console.log('ProductA2 works');
    }
}
