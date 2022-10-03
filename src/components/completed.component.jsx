import React from "react";
import "../App.css";

import Item from "./item";

class Completed extends React.Component {
  constructor() {
    super();

    this.state = {
      cTasks: [
        {
          id: 3,
          value: "Loki",
        },
      ],
    };
  }
  removehandler = (id, e) => {
    this.setState((prevState) => ({
      cTasks: prevState.cTasks.filter((task) => task.id !== id),
    }));
  };
  addElements = () => {
    const task = prompt("Enter the new task");
    const newid = (Date.now() / 1000) | 0;

    this.setState((state) => ({
      cTasks: [...state.cTasks, { id: newid, value: task }],
    }));
  };

  render() {
    return (
      <div
        className="completed"
        onDrop={(e) => {
          e.preventDefault();
          const sId = e.dataTransfer.getData("s_id");
          const sValue = e.dataTransfer.getData("s_value");

          this.setState((prevState) => ({
            cTasks: [...prevState, { id: sId, value: sValue }],
          }));
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
      >
        <h3>Completed</h3>
        <button className="plus" onClick={this.addElements}>
          add a new card
        </button>
        {this.state.cTasks.map(({ id, value }) => (
          <Item
            id={id}
            key={id}
            value={value}
            removeTask={this.removehandler}
          />
        ))}
      </div>
    );
  }
}

export default Completed;
