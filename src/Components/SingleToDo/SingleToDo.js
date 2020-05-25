import React, {Component} from 'react';

class SingleToDo extends Component {

    removeToDo = () => {
        this.props.removeToDo();
    };

    render() {
        return (
            <div className="single-task">
                <span className='single-task-text'>{this.props.task}</span>
                <span className='remove-task' onClick={this.removeToDo}>&times;</span>
            </div>
        );
    }
}

export default SingleToDo;