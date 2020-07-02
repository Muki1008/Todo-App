import React from "react";
import "../css/TodoItem.css";
class TodoItem extends React.Component {
  state = {};

  getStyle = () => {
    if (this.props.todo.completed)
      return { backgroundColor: "#00ff00", transition: "2s" };
    else return { backgroundColor: "#eb7171", transition: "2s" };
  };
  render() {
    const { title, id, time } = this.props.todo;
    return (
      <div className="TodoItem">
        <p style={this.getStyle()}>
          <input
            className="checkbox"
            type="checkbox"
            onClick={this.props.markComplete.bind(this, id)}
          ></input>
          {id + ". " + title}
          <span className="time">{time}</span>
        </p>
      </div>
    );
  }
}

export default TodoItem;
