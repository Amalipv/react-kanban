import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div className="task" id={this.props.id}>
        <input
          type="text"
          draggable="true"
          onDragStart={(event) => {
            event.dataTransfer.setData("s_id", event.target.id);
            event.dataTransfer.setData("s_value", event.target.value);
            console.log(
              "ele to be dragged " + event.target.id + " " + event.target.value
            );
          }}
          id={this.props.id}
          defaultValue={this.props.value}
        />
        <button
          className="minus"
          onClick={this.props.removeTask.bind(this, this.props.id)}
        >
          remove
        </button>
      </div>
    );
  }
}

export default Item;
