import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        field: 'campo a ser mostrado'
    }
  }

  render() {
      const field = this.state.field
    return (
      <div>
        <p>Nome {field}</p>
      </div>
    );
  }
}

export default MyComponent;
