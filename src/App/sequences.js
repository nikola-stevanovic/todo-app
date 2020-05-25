import {state, props} from "cerebral";
import {set, unshift, unset} from "cerebral/factories";

export const inputChange = set(state`inputValue`, props`inputValue`);

export const addNewTodo = [
    unshift(state`tasks`, props`inputValue`),
    set(state`inputValue`, '')
    ];

export const removeTodo = unset(state`tasks.${props`index`}`);

