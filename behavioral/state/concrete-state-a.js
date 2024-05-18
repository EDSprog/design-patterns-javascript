import { State } from './state.js';

export class ConcreteStateA extends State {
    operationA() {
        console.log(`Run operation A in ConcreteStateA with context: ${this.context.constructor.name}`)
    }

    operationB() {
        console.log(`Run operation B in ConcreteStateA with context: ${this.context.constructor.name}`)
    }
}
