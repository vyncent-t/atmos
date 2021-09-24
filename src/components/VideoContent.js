import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { controlActions } from "../store/UserControls"

function VideoContent() {
    const dispatch = useDispatch()
    const showContent = useSelector((state) => state.controls.showContentBox)

    function contentToggleHandler() {
        dispatch(controlActions.toggleContentBox())
    }
    return (
        <div className="videocontent">
            <button onClick={contentToggleHandler}>Content on/off</button>
            {showContent && <div>
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/FnTzjLbV-YY" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe></div>}
        </div>
    )
}

export default VideoContent