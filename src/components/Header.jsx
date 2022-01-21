import "../style/Header.css";

function Header() {
  const clock = Date();
  return (
    <div>
      <h4>Exemplo de relogio = {clock}</h4>
    </div>
  );
}

export default Header;
