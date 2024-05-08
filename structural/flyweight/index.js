import { FlyweightFactory } from './flyweight-factory.js';

const flyweightFactory = new FlyweightFactory();
const flyweight = flyweightFactory.getFlyweight('initState');
const sameFlyweight = flyweightFactory.getFlyweight('initState');
flyweight.operation('state');
sameFlyweight.operation('state2');

/**
 * Flyweight pattern help us  to save memory reusing same objects.
 *
 * Output:
 * ConcreteFlyweight: has extrinsic state state and intrinsic initState state. My ID is <same_number>.
 * ConcreteFlyweight: has extrinsic state2 state and intrinsic initState state. My ID is <same_number>
 */
