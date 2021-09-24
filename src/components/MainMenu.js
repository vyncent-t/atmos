import { useDispatch, useSelector } from "react-redux"
import { contentActions } from "../store/Content"
import ConfModal from './CModal';
import Backdrop from './Backdrop'
import MusicForm from './MusicForm';
import VideoForm from './VideoForm';
import VideoContent from "./VideoContent";


function MainMenu(props) {
    const dispatch = useDispatch()
    const showModal = useSelector((state) => state.content.showCreateModal)


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
            <VideoContent />
        </div>
    )
}

export default MainMenu;