import React, {Component} from 'react';
import * as ToDoActions from "../../Actions/ToDoActions";
import './AddNewToDo.css';

class AddNewToDo extends Component {

    state = {
        inputValue: '',
    };

    onInputChange = (value) => {
       this.setState({inputValue: value});
    };

    addNewToDo = () => {
        ToDoActions.addToDoItem(this.state.inputValue);
        this.setState({inputValue: ''});
    };

    render() {
        const {inputValue} = this.state;
        return (
            <div className="new-todo-wrapper">
                <input type="text"
                       value={inputValue}
                       placeholder='Add new task'
                       onChange={(event) => this.onInputChange(event.target.value)}
                       className="new-todo-input"/>
                <button className="new-todo-button" onClick={this.addNewToDo}>Add</button>
            </div>
        );
    }
}

export default AddNewToDo;