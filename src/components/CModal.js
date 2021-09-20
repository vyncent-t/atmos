function ConfModal(props) {

    function cancelHandler() {
        props.onCancel();
    }
    function confirmHandler() {
        props.onConfirm();
    }

    return (
        <div className="menuConfirm">
            <p> Are you sure?</p>
            <button className="btn btn-secondary m-1" onClick={cancelHandler}>Cancel</button>
            <button className="btn btn-success m-1" onClick={confirmHandler}>Confirm</button>
        </div>
    )
}

export default ConfModal;