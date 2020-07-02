import React from "react";
import "../css/AddTodo.css";

class AddTodo extends React.Component {
  state = {
    Id: 1,
    TODO: "",
    Time: "",
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.addTodo(this.state.Id, this.state.TODO, this.state.Time);
    this.setState({ Id: 1, TODO: "", Time: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="AddTodo">
        <form onSubmit={this.onSubmit}>
          <input
            className="input ForId"
            type="number"
            name="Id"
            placeholder="Id"
            onChange={this.onChange}
            value={this.state.Id}
          ></input>
          <input
            className="input ForTODO"
            type="text"
            name="TODO"
            placeholder="TO-DO"
            onChange={this.onChange}
            value={this.state.TODO}
          ></input>
          <input
            className="input ForTime"
            type="text"
            name="Time"
            placeholder="Time"
            onChange={this.onChange}
            value={this.state.Time}
          ></input>
          <button className="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
