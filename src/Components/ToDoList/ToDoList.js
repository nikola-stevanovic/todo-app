import React, {Component} from 'react';
import SingleToDo from "../SingleToDo/SingleToDo";
import ToDoStore from "../../Stores/ToDoStore";
import * as ToDoActions from "../../Actions/ToDoActions";

class ToDoList extends Component {

    state = {
        tasks: [],
    };

    componentDidMount() {
        ToDoStore.on('change', () => {
            this.setState({tasks: ToDoStore.getAll()});
        });
    };

    removeToDo = (index) => {
        ToDoActions.removeToDoItem(index);
    };

    render() {
        const { tasks } = this.state;
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