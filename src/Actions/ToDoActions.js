import Dispatcher from '../dispatcher';

export function addToDoItem(text) {
    Dispatcher.dispatch({
        type: "ADD_TODO_ITEM",
        text
    });
}

export function removeToDoItem(index) {
    Dispatcher.dispatch({
        type: "REMOVE_TODO_ITEM",
        index
    });
}