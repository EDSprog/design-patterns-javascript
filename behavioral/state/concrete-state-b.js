import { State } from './state.js';

export class ConcreteStateB extends State {
    operationA() {
        console.log(`Run operation A in ConcreteStateB with context: ${this.context.constructor.name}`)
    }

    operationB() {
        console.log(`Run operation B in ConcreteStateB with context: ${this.context.constructor.name}`)
    }
}
