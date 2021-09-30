import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { controlActions } from "../store/UserControls"

function MusicContent() {
    const dispatch = useDispatch()
    const showContent = useSelector((state) => state.controls.showContentBox)

    function contentToggleHandler() {
        dispatch(controlActions.toggleContentBox())
    }

    const musicID = `1DFixLWuPkv3KT3TnV35m3`
    return (
        <div className="musiccontent">
            <button onClick={contentToggleHandler}>Content on/off</button>
            {showContent && <div>
                <iframe title="playlist" src={`https://open.spotify.com/embed/album/${musicID}`} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>}
        </div>
    )
}

export default MusicContent
