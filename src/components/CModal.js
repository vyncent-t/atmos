function ConfModal(props) {

    function cancelHandler() {
        props.onCancel();
    }
    function confirmHandler() {
        props.onConfirm();
    }

    return (
        <div className="pracmodal">
            <p> Are you sure?</p>
            <button className="pracbtn pracbtn--alt" onClick={cancelHandler}>Cancel</button>
            <button className="pracbtn" onClick={confirmHandler}>Confirm</button>
        </div>
    )
}

export default ConfModal;