import Counter from "../components/Counter";
import "../style/BasicStyle.css";

export default function TestPage() {
  return (
    <div className="BasicStyle">
      <h1>Test Page</h1>
      <p>test of Component</p>
      <Counter />
    </div>
  );
}
