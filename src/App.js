import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos.js";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Watch movie with the kids",
        completed: false,
      },

      {
        id: 2,
        title: "Date with husbando",
        completed: false,
      },
      {
        id: 3,
        title: "Clean the garage",
        completed: false,
      },
    ],
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
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
