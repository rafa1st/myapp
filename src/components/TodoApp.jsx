import React from "react";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Todo-App</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">O que precisa ser feito?</label>
          <br />
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Adicionar #{this.state.items.length + 1}</button>
        </form>
        <h3>Tarefas</h3>

        <ol>
          {this.state.items.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ol>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
    console.log(this.state.items)
  }
}

export default TodoApp;
