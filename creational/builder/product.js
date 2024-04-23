/************************************************************************************************************
 * There no need to create abstract class for product                                                       *
 * because products can be completely different and there is no sense to create a common interface for them.*
 ************************************************************************************************************/
export class Product {
    constructor() {
        this.parts = [];
    }

    add(part) {
        this.parts.push(part);
    }

    show() {
        console.log('Product parts: ');
        this.parts.forEach(part => {
            console.log(part);
        });
    }
}
