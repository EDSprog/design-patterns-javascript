export class Context {
    constructor(arg1, arg2, strategy) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.strategy = strategy;
    }

    executeStrategy() {
        // You can pass specific arguments to the strategy it will decouple the strategy from the context but context can send redundant data to the strategy
        // In this case, we are passing the context itself to the strategy and strategy can access the context data that it needs,
        // but it will couple the strategy with the context more tightly
        return this.strategy.execute(this);
    }

    defaultBehavior() {
        return 'Execute without strategy';
    }

    doAlgorithm() {
        if (this.strategy) {
            return this.executeStrategy();
        }
        return this.defaultBehavior();
    }
}
