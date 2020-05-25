import React from 'react';
import {connect} from "@cerebral/react";
import {sequences, state} from "cerebral/tags";
import SingleToDo from "../SingleToDo/SingleToDo";

export default connect({
        tasks: state`tasks`,
        removeTodo: sequences`removeTodo`,
    },
    function ToDoList({tasks, removeTodo}) {
        return (
            tasks.map((task, index) => {
                return <SingleToDo
                    key={index}
                    task={task}
                    removeToDo={() => removeTodo({index})}
                />
            })
        );
    }
);