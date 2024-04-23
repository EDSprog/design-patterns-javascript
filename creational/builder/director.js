export class Director {
    constructor(builder) {
        this.builder = builder;
    }

    construct() {
        this.builder.buildPartA();
        this.builder.buildPartB();
        this.builder.buildPartC();
    }
}
