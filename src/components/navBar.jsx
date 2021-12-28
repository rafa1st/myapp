import '../style/NavBar.css';

const NavBar = (props) => {
    return (
    <div>
        <h1>{props.name}</h1>
    </div>
    );
};

NavBar.defaultProps = { name: "this is the nav default props."}


export default NavBar;