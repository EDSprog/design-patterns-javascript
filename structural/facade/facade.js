import { SubsystemClassA } from './subsystem-class-a.js';
import { SubsystemClassB } from './subsystem-class-b.js';

export class Facade {
    constructor() {
        this.subsystemClassA = new SubsystemClassA();
        this.subsystemClassB = new SubsystemClassB();
    }

    operation() {
        // Facade delegates work to subsystem classes.
        // It responsible for coordinating the subsystems.
        this.subsystemClassA.operation1();
        this.subsystemClassA.operation2();
        this.subsystemClassA.operation3();
        this.subsystemClassB.operation1();
        this.subsystemClassB.operation2();
    }
}
