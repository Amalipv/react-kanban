import React from "react";
import "../App.css";

import Item from "./item";

class InProgress extends React.Component {
  constructor() {
    super();

    this.state = {
      iTasks: [
        {
          id: 2,
          value: "Item 2",
        },
      ],
    };
  }
  removeHandler = (id, e) => {
    this.setState((prevState) => ({
      iTasks: prevState.iTasks.filter((task) => task.id !== id),
    }));
  };
  addElements = () => {
    const task = prompt("Enter the task");
    let newid = (Date.now() / 1000) | 0;

    this.setState((prevState) => ({
      iTasks: [...prevState.iTasks, { id: newid, value: task }],
    }));
  };

  render() {
    return (
      <div
        className="inprogress"
        onDrop={(e) => {
          e.preventDefault();
          var s_id = e.dataTransfer.getData("s_id");
          console.log("InP id " + s_id);

          const s_value = e.dataTransfer.getData("s_value");
          console.log("In Pval " + s_value);

          this.setState((prevState) => ({
            iTasks: [...prevState.iTasks, { id: s_id, value: s_value }],
          }));
        }}
        onDragOver={(e) => {
          console.log("INP on drag over called");
          e.preventDefault();
        }}
      >
        <h3>InProgress</h3>
        <button className="plus" onClick={this.addElements}>
          add a new card
        </button>
        {this.state.iTasks.map(({ id, value }) => (
          <Item
            key={id}
            id={id}
            value={value}
            removeTask={this.removeHandler}
          />
        ))}
      </div>
    );
  }
}

export default InProgress;
