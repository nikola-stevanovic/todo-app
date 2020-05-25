import React from 'react';
import AddNewToDo from "./Components/AddNewToDo/AddNewToDo";
import ToDoList from "./Components/ToDoList/ToDoList";
import {connect} from '@cerebral/react';
import {state, sequences} from 'cerebral/tags';
import './App.css';

export default connect({
        inputValue: state`inputValue`,
        tasks: state`tasks`,
        addNewTodo: sequences`addNewTodo`,
        removeTodo: sequences`removeTodo`,
        inputChange: sequences`inputChange`
    },
    function App({inputValue, tasks, inputChange, addNewTodo, removeTodo}) {
        return (
            <div className="wrapper">
                <AddNewToDo
                    inputValue={inputValue}
                    onInputChange={(inputValue) => inputChange({inputValue})}
                    addNewToDo={addNewTodo}
                />
                <ToDoList
                    tasks={tasks}
                    removeToDo={(index) => removeTodo({index})}
                />
            </div>
        );
    }
)