import { useState } from 'react';

import ConfModal from './Modal';
import Backdrop from './Backdrop'


function Todo(props) {
    const [modalOn, setModalOn] = useState(false);

    function PracDeleteHandler() {
        setModalOn(true)
    }

    function closeModalHandler() {
        setModalOn(false)
    }
    return (
        <div className="praccard">
            <h2>{props.text}</h2>
            <div className="pracactions">
                <button className="pracbtn" onClick={PracDeleteHandler}>Delete</button>
            </div>
            {modalOn && <ConfModal />}
            {modalOn && <Backdrop onCancel={closeModalHandler} />}
        </div>
    )
}

export default Todo;