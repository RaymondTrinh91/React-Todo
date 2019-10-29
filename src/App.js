import React, { Component } from 'react';
import Data from './Data';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import "./components/TodoComponents/Todo.css";

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

  //====Complete/DeleteCompleted Functions====
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
    localStorage.clear();
    localStorage.setItem(todoItems);
  }

  deleteCompleted = () => {
    const filtered = this.state.todoItems.filter(item => 
      item.completed === false
    )

    this.setState({
      todoItems: filtered
    })
    localStorage.clear();
    localStorage.setItem(todoItems);
  }
  //====Complete/deleteCompleted Functions====

  render() {
    return (
      <div className="appContain">
        <div className="headContain">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm
            addTodo={this.addTodo}
            deleteCompleted={this.deleteCompleted} />
        </div>
          <TodoList
            todoItems={this.state.todoItems}
            toggleComplete={this.toggleComplete} />
      </div>
    );
  }

} //Closes App

export default App;
