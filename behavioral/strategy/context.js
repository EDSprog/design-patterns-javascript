import { AbstractStrategy } from './strategies/abstract-strategy.js';

export class Context {
    constructor(arg1, arg2, strategy) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this._strategy = strategy;
    }

    set strategy(strategy) {
        if (strategy instanceof AbstractStrategy) {
            this._strategy = strategy;
        } else {
            throw new Error('Strategy should be an instance of AbstractStrategy');
        }
    }

    executeStrategy() {
        // You can pass specific arguments to the strategy it will decouple the strategy from the context but context can send redundant data to the strategy
        // In this case, we are passing the context itself to the strategy and strategy can access the context data that it needs,
        // but it will couple the strategy with the context more tightly
        return this._strategy.execute(this);
    }

    defaultBehavior() {
        return 'Execute without strategy';
    }

    doAlgorithm() {
        if (this._strategy) {
            return this.executeStrategy();
        }
        return this.defaultBehavior();
    }
}
