export class AbstractComponent {
    constructor() {
        if (this.constructor === AbstractComponent) {
            throw new Error('Abstract class "AbstractComponent" cannot be instantiated directly');
        }
    }

    operation() {
        throw new Error('AbstractComponent#operation needs to be overridden');
    }
}
