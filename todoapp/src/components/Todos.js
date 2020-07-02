import React from "react";
import TodoItem from "./TodoItem";

class Todos extends React.Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        markComplete={this.props.markComplete}
        key={todo.id}
        todo={todo}
      />
    ));
  }
}

export default Todos;
