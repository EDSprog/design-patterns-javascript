import { Facade } from './facade.js';

const facade = new Facade();
facade.operation();

/**
 * Facade pattern helps to hide complex logic behind a simple interface.
 * Subsystems are not aware of the facade.
 * Client can interact with the facade and with the subsystems directly.
 *
 * Output:
 * SubsystemClassA: operation1 is working...
 * SubsystemClassA: operation2 is working...
 * SubsystemClassA: operation3 is working...
 * SubsystemClassB: operation1 is working...
 * SubsystemClassB: operation2 is working...
 */
