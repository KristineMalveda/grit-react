import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddTodo extends Component {
  state = { title: "" };
  onChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Add Todo .. ."
          name="title"
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.onChange}
        ></input>

        <input
          name="submit"
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: 1 }}
        ></input>
      </form>
    );
  }
}
//proptypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
