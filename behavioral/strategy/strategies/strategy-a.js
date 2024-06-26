import { AbstractStrategy } from './abstract-strategy.js';

export class StrategyA extends AbstractStrategy {
    execute(context) {
        return `Execute ConcreteStrategyA with ${context.arg1} and ${context.arg2}`;
    }
}
