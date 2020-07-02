import React from "react";
import "../css/Header.css";
import daysInWeek from "../helperJS/HelperDays";
import monthsInYear from "../helperJS/HelperMonths";

class Header extends React.Component {
  state = {
    date: new Date(),
  };

  date = () => {
    let days = daysInWeek;
    let months = monthsInYear;

    let date =
      days[this.state.date.getDay()] +
      " " +
      months[this.state.date.getMonth()] +
      " " +
      this.state.date.getFullYear();

    return date;
  };

  clock = () => {};

  render() {
    return (
      <div className="Header">
        <div className="date">{this.date()}</div>
        <div className="title">TodoList</div>
        <div className="clock">{this.clock()}</div>
      </div>
    );
  }
}

export default Header;
