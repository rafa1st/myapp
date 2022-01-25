import "../style/NavBar.css";

export default function NavBar(props) {
  return (
    <div>
      <p>NavBar</p>
      <h1>{props.name}</h1>
      <p>End NavBar</p>
    </div>
  );
}

NavBar.defaultProps = { name: "Nav default props." };
