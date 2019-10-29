import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        }
    }

    // ==============Form Functions==============
    handleChanges = event => {
        this.setState({
            newTodo: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' })
    }
    // ==============Form Functions==============

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                />
                <button type="submit">Add Task</button>
            </form>
        )
    }
}//Closes TodoForm

export default TodoForm