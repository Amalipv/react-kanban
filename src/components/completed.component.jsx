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
        /* ondrop="drop(event)"
        ondragover="allowDrop(event)" */
      >
        <h3>Completed</h3>
        <button className="plus" onClick={this.addElements}>
          add a new card
        </button>
        {this.state.cTasks.map(({ id, value }) => (
          <Item id={id} key={id} value={value} />
        ))}
      </div>
    );
  }
}

export default Completed;
