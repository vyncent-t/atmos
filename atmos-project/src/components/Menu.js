import { useState } from 'react';
import ConfModal from './Modal';
import Backdrop from './Backdrop'
import MusicForm from './MusicForm';
import VideoForm from './VideoForm';


function Menu(props) {
    const [modalOn, setModalOn] = useState(false);

    function PracDeleteHandler() {
        setModalOn(true)
    }

    function closeModalHandler() {
        setModalOn(false)
    }

    return (
        <div className="pracmenu">
            <h2>{props.text}</h2>
            <div className="formContainer">
                <MusicForm />
                <VideoForm />
            </div>
            <div className="pracactions">
                <button className="pracbtn" onClick={PracDeleteHandler}>Create Atmosphere</button>
            </div>
            {modalOn && <ConfModal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            {modalOn && <Backdrop onCancel={closeModalHandler} />}
        </div>
    )
}

export default Menu;