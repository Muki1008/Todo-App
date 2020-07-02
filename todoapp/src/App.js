import React, { Component } from "react";
import "./css/App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    date: new Date(),
    todos: [],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  resetPage = () => {
    if (this.state.date.getMinutes() === 59) {
      this.setState({ todos: [] });
    }
  };
  addTodo = (Id, TODO, Time) => {
    const newTodo = {
      id: Id,
      title: TODO,
      completed: false,
      time: Time,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header reset={this.resetPage} />
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
