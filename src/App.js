import React, {Component} from 'react';
import AddNewToDo from "./Components/AddNewToDo/AddNewToDo";
import ToDoList from "./Components/ToDoList/ToDoList";
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="wrapper">
                <AddNewToDo />
                <ToDoList />
            </div>
        );
    }
}

export default App;


