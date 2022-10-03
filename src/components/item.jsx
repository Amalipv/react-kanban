import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
class Item extends React.Component {
  constructor() {
    super();

    this.state = { isHovering: false };
  }

  handleMouseOver = () => {
    this.setState(() => ({ isHovering: true }));
  };

  handleMouseOut = () => {
    this.setState(() => ({ isHovering: false }));
  };

  render() {
    return (
      <div
        className="task"
        id={this.props.id}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
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
        {this.state.isHovering && (
          <button
            className="minus"
            onClick={this.props.removeTask.bind(this, this.props.id)}
          >
            <FontAwesomeIcon
              className="deleteIcon"
              icon={solid("trash")}
              size="l"
              fade
            />
          </button>
        )}
      </div>
    );
  }
}

export default Item;
