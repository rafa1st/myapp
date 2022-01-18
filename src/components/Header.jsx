import "../style/Header.css";
import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clock: Date(),
    };    
  }

  render() {
    const clock = this.state.clock;
    return (
      <div>
        <h1>Exemplo de relogio = {clock}</h1>
      </div>
    );
  }
}

export default Header;
