import { useDispatch, useSelector } from "react-redux"
import { contentActions } from "../store/index"
import ConfModal from './CModal';
import Backdrop from './Backdrop'
import MusicForm from './MusicForm';
import VideoForm from './VideoForm';


function MainMenu(props) {
    const dispatch = useDispatch()
    const showModal = useSelector((state) => state.showCreateModal)


    function toggleModalHandler() {
        dispatch(contentActions.showCreateModal())
    }

    return (
        <div className="pracmenu">
            <h2>{props.text}</h2>
            <div className="formContainer">
                <MusicForm />
                <VideoForm />
            </div>
            <div className="pracactions">
                <button className="btn btn-light" onClick={toggleModalHandler}>Create Atmosphere</button>
            </div>
            {showModal && <ConfModal onCancel={toggleModalHandler} onConfirm={toggleModalHandler} />}
            {showModal && <Backdrop onCancel={toggleModalHandler} />}
        </div>
    )
}

export default MainMenu;