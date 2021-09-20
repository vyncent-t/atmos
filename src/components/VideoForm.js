import VideoButton from "./VideoButton"
import { useState } from 'react'

function VideoForm() {
    const [youtubeGenre, setYoutubeGenre] = useState("No video genre");

    return (
        <div className="pracvideomenu">
            <div>
                <h2>Visual Choices</h2>
            </div>
            <div>
                <p>{`Your current video genre: ${youtubeGenre}`}</p>
            </div>
            <div className="menubuttons">
                <VideoButton videoKeyword="Beach"
                    userAction={keyword => setYoutubeGenre(keyword)} />
                <VideoButton videoKeyword="Waterfall"
                    userAction={keyword => setYoutubeGenre(keyword)} />
                <VideoButton videoKeyword="City"
                    userAction={keyword => setYoutubeGenre(keyword)} />
                <VideoButton videoKeyword="Park"
                    userAction={keyword => setYoutubeGenre(keyword)} />
                <VideoButton videoKeyword="Space"
                    userAction={keyword => setYoutubeGenre(keyword)} />
            </div>
        </div>
    )
}

export default VideoForm