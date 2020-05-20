import React, {Component} from 'react';
import AddNewToDo from "./Components/AddNewToDo/AddNewToDo";
import SingleToDo from "./Components/SingleToDo/SingleToDo";
import './App.css';

class App extends Component {
    state = {
        inputValue: '',
        tasks: [],
    };

    inputValueChangeHandler = (value) => {
        this.setState({inputValue: value});
    };

    addToDoHandler = () => {
        const tasks = [...this.state.tasks];
        tasks.unshift(this.state.inputValue);
        this.setState({tasks});
        this.setState({inputValue: ''});
    };

    removeToDoHandler = (index) => {
        const tasks = [...this.state.tasks]
        tasks.splice(index, 1);
        this.setState({tasks});
    };

    render() {
        const {tasks, inputValue} = this.state;
        return (
            <div className="wrapper">
                <AddNewToDo
                    inputValue={inputValue}
                    onInputChange={this.inputValueChangeHandler}
                    addNewToDo={this.addToDoHandler}
                />
                {tasks.map((task, index) => {
                    return <SingleToDo
                                key={index}
                                task={task}
                                removeToDo={() => this.removeToDoHandler(index)}
                            />
                })
                }
            </div>
        );
    }
}

export default App;


