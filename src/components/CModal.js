import { useHistory } from "react-router";
function ConfModal(props) {


    const history = useHistory();

    function cancelHandler() {
        props.onCancel();
    }
    function confirmHandler() {
        history.push("/dashboard")
    }

    return (
        <div className="menuConfirm">
            <p> Are you sure?</p>
            <button className="btn btn-secondary m-1" onClick={cancelHandler}>Cancel</button>
            <button className="btn btn-success m-1" onClick={confirmHandler}><span className="text-light">Continue</span></button>
        </div>
    )
}

export default ConfModal;