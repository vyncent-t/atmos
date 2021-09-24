import VideoButton from "./VideoButton"
import { useSelector } from "react-redux"

function VideoForm() {
    const videoChoice = useSelector((state) => state.content.videoButtonChoice)

    return (
        <div className="videomenu">
            <div>
                <h2>Visual Choices</h2>
            </div>
            <div>
                <p>{`Your current video genre: ${videoChoice}`}</p>
            </div>
            <div className="menubuttons">
                <VideoButton videoKeyword="Beach" />
                <VideoButton videoKeyword="Waterfall" />
                <VideoButton videoKeyword="City" />
                <VideoButton videoKeyword="Park" />
                <VideoButton videoKeyword="Space" />
            </div>
        </div>
    )
}

export default VideoForm