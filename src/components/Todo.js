import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  getStyle() {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "2px dotted #ccc",
      textDecoration: this.props.todoProp.completed ? "line-through" : "none",
    };
  }

  render() {
    const { id, title } = this.props.todoProp;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markCompleteProp.bind(this, id)}
          />
          {title}
        </p>
      </div>
    );
  }
}

//proptypes
Todo.propTypes = {
  todoProp: PropTypes.object.isRequired,
};

export default Todo;
