import React, { Component } from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    console.log(this.props.todos);
    const todos = this.props.todos;
    return (
      <div>
        {todos.map((todoItem) => {
          return (
            <Todo
              key={todoItem.id}
              todoProp={todoItem}
              markCompleteProp={this.props.markComplete}
              deleteTodoProp={this.props.deleteTodo}
            />
          );
        })}
      </div>
    );
  }
}
//proptypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todos;
