import React, { Component } from "react";

class CurrentDate extends Component {
  render() {
    return (
      <div>
        Tänään on{" "}
        {new Date().toLocaleString("fi-FI", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour12: false
        })}
      </div>
    );
  }
}

export default CurrentDate;
