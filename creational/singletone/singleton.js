export class Singleton {
    static _instance = null;

    constructor(name) {
        if (Singleton._instance) {
            return Singleton._instance;
        }
        Singleton._instance = this;
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        // Singleton name can be set only once
        if (!this._name) {
            this._name = name;
        }
    }

    doSomething() {
        console.log('Singleton does something');
    }
}
