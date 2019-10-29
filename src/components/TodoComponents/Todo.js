import React, {Component} from 'react';
import "./Todo.css";

class Todo extends Component {

    render() {
        return (
            <div 
            className={`task${this.props.todo.completed ? ' completed' : ''}`}
            onClick={()=> this.props.toggleComplete(this.props.todo.id)}>
                <p>{this.props.todo.task}</p>
            </div>
        )
    }
}

export default Todo;