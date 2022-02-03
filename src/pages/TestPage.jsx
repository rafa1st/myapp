import Body from "../components/Body";
import StateElevation from "../components/StateElevation";
//import TodoFuncional from "../components/TodoFuncional";
//styles
import "../style/BasicStyle.css";

export default function TestPage() {
  return (
    <div className="BasicStyle">
      <h1>Test Page</h1>
      <h3>Test component</h3>
      <Body />
      <StateElevation />
    </div>
  );
}
