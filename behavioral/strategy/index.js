import { Context } from './context.js';
import { StrategyA } from './strategies/strategy-a.js';
import { StrategyB } from './strategies/strategy-b.js';

(() => {
    const context = new Context('arg1', 'arg2');
    console.log(context.doAlgorithm());
    context.strategy = new StrategyA();
    console.log(context.doAlgorithm());
    context.strategy = new StrategyB();
    console.log(context.doAlgorithm());
})();
