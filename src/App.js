import React, { Component } from 'react';
import Data from './Data';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todoItems: Data
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // =============Form Function================
  addTodo = taskName => {

    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todoItems: [...this.state.todoItems, newTask]
    })

  }
  // =============Form Function================

  toggleComplete = taskID => {
    this.setState({
      todoItems: this.state.todoItems.map(item => {
        if (item.id === taskID) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }// Closes toggleCompleted

  render() {
    return (
      <div className="appContain">
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <div>
          <TodoList todoItems={this.state.todoItems} />
        </div>
      </div>
    );
  }

}//Closes App

export default App;
