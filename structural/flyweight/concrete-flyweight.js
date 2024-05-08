import { Flyweight } from './flyweight.js';

export class ConcreteFlyweight extends Flyweight {
    constructor(intrinsicState) {
        super();
        this.intrinsicState = intrinsicState;
        this.randomNumber = Math.floor(Math.random() * 100); // just to show that it is the same object in tests
    }

    operation(extrinsicState) {
        console.log(`ConcreteFlyweight: has extrinsic ${extrinsicState} state and intrinsic ${this.intrinsicState} state. My ID is ${this.randomNumber}.`);
    }
}
