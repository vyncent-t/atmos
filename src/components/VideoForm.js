import VideoButton from "./VideoButton"

function VideoForm() {
    return (
        <div className="pracvideomenu">
            <div>
                <h2>Visual Choices</h2>
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