import { ConcreteFlyweight } from './concrete-flyweight.js';

export class FlyweightFactory {
    constructor() {
        this.flyweights = {};
    }

    getFlyweight(initState) {
        if (!this.flyweights[initState]) {
            this.flyweights[initState] = new ConcreteFlyweight(initState);
        }
        return this.flyweights[initState];
    }
}
