import "../style/Counter.css";
import React from "react";

class Counter extends React.Components {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
      const counter = this.counter;
    <div>
      <h1>Counter: {counter}</h1>
    </div>;
  }
}
