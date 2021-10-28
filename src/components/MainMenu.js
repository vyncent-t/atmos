import { useDispatch, useSelector } from "react-redux"
import { contentActions } from "../store/Content"
import { useHistory } from "react-router";
import ConfModal from './CModal';
import Backdrop from './Backdrop'
import MusicForm from './MusicForm';
import VideoForm from './VideoForm';
import VideoContent from "./VideoContent";
import { AnimationWrapper } from 'react-hover-animation'

const buttonStyles = {
    display: 'flex',
    textAlign: "center",

    cursor: 'pointer',
    padding:'0.46em 1.6em',
	border:'0.1em solid #FFFFFF',
	borderRadius:'0.12em',
	boxSizing: 'border-box',
	textDecoration:'none',
	fontFamily:'OCR A Std',
	fontWeight:300,
	color:'#FFFFFF',
	textShadow: '0 0.04em 0.04em rgba(0,0,0,0.35)',
	backgroundColor:'#7fb069',
   
}

function MainMenu(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const showModal = useSelector((state) => state.content.showCreateModal)


    function useContinueContent() {
        history.push("/dashboard")
    }

    function toggleModalHandler() {
        dispatch(contentActions.showCreateModal())
    }

    return (
        <div className="pracmenu">
            <h2>{props.text}</h2>
            <div className="formContainer my-3">
                <MusicForm />
                <VideoForm />
            </div>
            <div className="pracactions">
                <AnimationWrapper>
               
             <button className="my-5" style={buttonStyles} onClick={toggleModalHandler}>Create Atmosphere</button>
            </AnimationWrapper></div>
            {showModal && <ConfModal onCancel={toggleModalHandler} onConfirm={useContinueContent} />}
            {showModal && <Backdrop onCancel={toggleModalHandler} />}
            {/* <VideoContent /> */}
        </div>
    )
}

export default MainMenu;