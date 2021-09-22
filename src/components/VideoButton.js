import { useDispatch } from "react-redux"
import { contentActions } from "../store/index"

function VideoButton(props) {
    const keyword = props.videoKeyword
    const dispatch = useDispatch()

    const setVideoGenre = () => {
        dispatch(contentActions.updateVideoContent(keyword))
        console.log(`user chose ${keyword} as their video choice via button`)
    }
    return (
        <div>
            <button className="btn btn-info text-light m-1" onClick={setVideoGenre}>{keyword}</button>
        </div >
    )
}

export default VideoButton