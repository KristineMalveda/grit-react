import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  getStyle() {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px  #ccc dotted",
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
          <button
            onClick={this.props.deleteTodoProp.bind(this, id)}
            style={buttonStyle}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

//proptypes
Todo.propTypes = {
  todoProp: PropTypes.object.isRequired,
  markCompleteProp: PropTypes.func.isRequired,
  deleteTodoProp: PropTypes.func.isRequired,
};

const buttonStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  padding: "5px 9px",
  cursor: "pointer",
  float: "right",
};

export default Todo;
