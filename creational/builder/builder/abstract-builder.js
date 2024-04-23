export class AbstractBuilder {
    /************************************************************************************************
     * These methods not abstract (not throwing an error if not implemented in the subclass) because*
     * we want to allow the subclass to implement only the methods it needs.                        *
     * If we make them abstract, the subclass must implement all of them.                           *
     ************************************************************************************************/
    buildPartA() {}
    buildPartB() {}
    buildPartC() {}
}
