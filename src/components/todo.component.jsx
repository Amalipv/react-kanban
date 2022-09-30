import React from "react";
import { useRef } from "react";

import "../App.css";
import Item from "./item";

class Todo extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        {
          id: 1,
          desc: "Item 1",
        },
      ],
    };
  }
  removehandler = (id, e) => {
    console.log("hello removehandler here of " + id);
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };
  addElements = () => {
    const task = prompt("Enter the task");
    let newid = (Date.now() / 1000) | 0;

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, { id: newid, desc: task }],
    }));
  };

  render() {
    return (
      <div
        className="todo"
        onDrop={(e) => {
          e.preventDefault();
          var s_id = e.dataTransfer.getData("s_id");
          console.log("Todo id " + s_id);

          const s_value = e.dataTransfer.getData("s_value");
          console.log("Todo val " + s_value);

          this.setState((prevState) => ({
            tasks: [...prevState.tasks, { id: s_id, desc: s_value }],
          }));
        }}
        onDragOver={(e) => {
          var s_id = e.dataTransfer.getData("s_id");
          console.log("Todo id " + s_id);

          const s_value = e.dataTransfer.getData("s_value");
          console.log("Todo val " + s_value);
          this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => task !== s_id),
          }));
          console.log("Todo ondragover called");
          e.preventDefault();
        }}
      >
        <h3>Todo</h3>
        <button className="plus" onClick={this.addElements}>
          add a new card
        </button>

        {this.state.tasks.map(({ id, desc }) => (
          <Item key={id} id={id} value={desc} removeTask={this.removehandler} />
        ))}
      </div>
    );
  }
}

export default Todo;
