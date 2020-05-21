import EventEmitter from 'events';
import Dispatcher from "../dispatcher";

class ToDoStore extends EventEmitter {
    tasks = [];

    getAll = () => {
        return this.tasks;
    };

    addToDoItem = (text) => {
        this.tasks.unshift(text);
        this.emit('change');
    };

    removeToDoItem = (index) => {
        this.tasks.splice(index, 1);
        this.emit('change');
    };

    handleActions = (action) => {
        switch(action.type) {
            case 'ADD_TODO_ITEM':
                this.addToDoItem(action.text)
                break;
            case 'REMOVE_TODO_ITEM':
                this.removeToDoItem(action.index)
                break;
            default:
            // do nothing
        }
    }
}

const toDoStore = new ToDoStore();
Dispatcher.register(toDoStore.handleActions);

export default toDoStore;