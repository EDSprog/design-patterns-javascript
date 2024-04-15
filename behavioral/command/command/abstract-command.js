export class AbstractCommand {
    execute() {
        throw new Error('AbstractCommand#execute needs to be overridden');
    }
}
