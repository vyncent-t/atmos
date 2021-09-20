import { useState } from 'react';
import ConfModal from './CModal';
import Backdrop from './Backdrop'
import MusicForm from './MusicForm';
import VideoForm from './VideoForm';


function MainMenu(props) {
    const [state, setState] = useState({
        modalOn: false,
        musicGenre: "none",
        videoGenre: "none"
    });

    function ModalDeleteHandler() {
        setState({ ...state, modalOn: true })
    }

    function closeModalHandler() {
        setState({ ...state, modalOn: false })
    }

    return (
        <div className="pracmenu">
            <h2>{props.text}</h2>
            <div className="formContainer">
                <MusicForm />
                <VideoForm />
            </div>
            <div className="pracactions">
                <button className="btn btn-light" onClick={ModalDeleteHandler}>Create Atmosphere</button>
            </div>
            {state.modalOn && <ConfModal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            {state.modalOn && <Backdrop onCancel={closeModalHandler} />}
        </div>
    )
}

export default MainMenu;