export class Invoker {
    constructor() {
        this._commands = [];
    }

    addCommand(command) {
        this._commands.push(command);
    }

    removeCommand(command) {
        this._commands = this._commands.filter(c => c !== command);
    }

    doSomething() {
        console.log('Invoker is working...');
        this._commands.forEach(command => {
            command.execute();
        });
    }
}
