import React from 'react';
import AddNewToDo from "./Components/AddNewToDo/AddNewToDo";
import ToDoList from "./Components/ToDoList/ToDoList";
import './App.css';

function App() {
    return (
        <div className="wrapper">
            <AddNewToDo/>
            <ToDoList/>
        </div>
    );
}

export default App;
