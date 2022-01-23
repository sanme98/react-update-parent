export default function Child(props) {
    function handleOnClick() {
        props.parentFunction('Message from Child: ' + new Date());
    }

    return (
        <div className="child">
            <h1>I'm a child component!</h1>
            <button onClick={handleOnClick}>Click me to send message to parent</button>
        </div>
    )
}