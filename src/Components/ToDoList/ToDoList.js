import React, {Component} from 'react';
import SingleToDo from "../SingleToDo/SingleToDo";
import './SingleToDo.css';

class ToDoList extends Component {

    removeToDo = (index) => {
        this.props.removeToDo(index);
    }

    render() {
        const {tasks} = this.props;
        return (
            tasks.map((task, index) => {
                return <SingleToDo
                    key={index}
                    task={task}
                    removeToDo={() => this.removeToDo(index)}
                />
            })
        );
    }
}

export default ToDoList;