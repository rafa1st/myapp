import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Header from "./components/Header";
import App from "./components/App";
import Body from "./components/Body";
import MyComponent from "./components/MyComponent";
import TodoApp from "./components/TodoApp";
import Counter from "./components/Counter";
import NavBar from "./components/NavBar";
import PaiComponent from "./components/PaiComponent";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <NavBar />
    <App />
    <Body />
    <TodoApp />
    <PaiComponent />
    <MyComponent />
    <Counter />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
