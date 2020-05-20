import React, {Component} from 'react';
import './AddNewToDo.css';

class AddNewToDo extends Component {
    onInputChange = (value) => {
        this.props.onInputChange(value);
    };

    addNewToDo = () => {
        this.props.addNewToDo();
    };

    render() {
        const {inputValue} = this.props;
        return (
            <div className="new-todo-wrapper">
                <input type="text"
                       value={inputValue}
                       placeholder='Add new task'
                       onChange={(event) => this.onInputChange(event.target.value)}
                       id="new-todo"
                       className="new-todo-input"/>
                <button className="new-todo-button" onClick={this.addNewToDo}>Add</button>
            </div>
        );
    }
}

export default AddNewToDo;