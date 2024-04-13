import { AbstractStrategy } from './abstract-strategy.js';

export class StrategyB extends AbstractStrategy {
    execute(context) {
        return `Execute ConcreteStrategyB with ${context.arg1} and ${context.arg2}`;
    }
}
