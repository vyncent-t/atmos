import { Link } from "react-router-dom"
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
            <button className="btn btn-success m-1" onClick={confirmHandler}><Link to="/dashboard"><span className="text-light">Continue</span></Link></button>
        </div>
    )
}

export default ConfModal;