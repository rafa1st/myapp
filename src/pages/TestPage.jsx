import TodoFuncional from "../components/TodoFuncional";
//styles
import "../style/BasicStyle.css";

export default function TestPage() {
  return (
    <div className="BasicStyle">
      <h1>Test Page</h1>
      <p style={{background: "white", color: "black"}}>test of Component</p>
      <TodoFuncional />
    </div>
  );
}
