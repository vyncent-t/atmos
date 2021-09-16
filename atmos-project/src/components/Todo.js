function Todo(props) {
    function PracDeleteHandler() {
        console.log('Clicked!')
        console.log(props.text)
    }
    return (
        <div className="praccard">
            <h2>{props.text}</h2>
            <div className="pracactions">
                <button className="pracbtn" onClick={PracDeleteHandler}>Delete</button>
            </div>
        </div>
    )
}

export default Todo;