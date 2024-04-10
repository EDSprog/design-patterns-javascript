export class AbstractStrategy {
    execute(context) {
        throw new Error('Strategy#execute needs to be overridden');
    }
}
