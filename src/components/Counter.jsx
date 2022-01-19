import React from "react";
import "../style/Counter.css";


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: [],
    };
  }

  render() {    
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
      </div>
    );
  }
}

export default Counter;
