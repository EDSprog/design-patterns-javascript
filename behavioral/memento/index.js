import { Originator } from './originator.js';
import { Caretaker } from './caretaker.js';

const originator = new Originator(new Date().toISOString());
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.changeRandomState();

caretaker.backup();
originator.changeRandomState();

caretaker.backup();
originator.changeRandomState();

console.log('Restoring to previous state...');

caretaker.undo();
caretaker.undo();
caretaker.undo();

/**
 * Memento pattern lets you save and restore the previous state of an object without revealing the details of its implementation.
 * Output:
 * Originator: My initial state is: 2024-05-18T11:41:08.089Z
 * Caretaker: Saving Originator's state...
 * Changing state...
 * Changed state to 2z0lmj4
 * Caretaker: Saving Originator's state...
 * Changing state...
 * Changed state to dunomgg
 * Caretaker: Saving Originator's state...
 * Changing state...
 * Changed state to mplcv7t
 * Restoring to previous state...
 * State was restored to: dunomgg
 * State was restored to: 2z0lmj4
 * State was restored to: 2024-05-18T11:41:08.089Z
 */
