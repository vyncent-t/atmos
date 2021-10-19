import { useDispatch, useSelector } from "react-redux"
import { contentActions } from "../store/Content"
import { useHistory } from "react-router";
import ConfModal from './CModal';
import Backdrop from './Backdrop'
import MusicForm from './MusicForm';
import VideoForm from './VideoForm';
import VideoContent from "./VideoContent";


// import useAuth from '../useAuth'
// import SpotifyWebApi from 'spotify-web-api-node'


// const spotifyApi = new SpotifyWebApi({
//     clientid: '50885eb87ce14757bdde10e7fb01f91a'
// })

// function SpotifyMusic() {



// }

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
            <div className="formContainer">
                <MusicForm />
                <VideoForm />
            </div>
            <div className="pracactions">
                <button className="btn btn-light" onClick={toggleModalHandler}>Create Atmosphere</button>
            </div>
            {showModal && <ConfModal onCancel={toggleModalHandler} onConfirm={useContinueContent} />}
            {showModal && <Backdrop onCancel={toggleModalHandler} />}
            {/* <VideoContent /> */}
        </div>
    )
}

export default MainMenu;