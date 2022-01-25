import '../style/Body.css';


const Body = (props) => {
    return (
    <body className='Body'>
        <p>this is body</p>
        <h1>{props.name}</h1>
    </body>
    );
};

Body.defaultProps = { name: "this is the body default props."}


export default Body;