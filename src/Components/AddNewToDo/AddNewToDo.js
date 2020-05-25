import React from 'react';
import './AddNewToDo.css';
import {connect} from "@cerebral/react";
import {sequences, state} from "cerebral/tags";

export default connect({
        inputValue: state`inputValue`,
        addNewTodo: sequences`addNewTodo`,
        inputChange: sequences`inputChange`
    },
    function AddNewTodo({inputValue, inputChange, addNewTodo}) {
        return (
            <div className="new-todo-wrapper">
                <input type="text"
                       value={inputValue}
                       placeholder='Add new task'
                       onChange={(event) => inputChange({inputValue: event.target.value})}
                       id="new-todo"
                       className="new-todo-input"/>
                <button className="new-todo-button" onClick={() => addNewTodo()}>Add</button>
            </div>
        );
    }
);

