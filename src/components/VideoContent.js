import { useSelector } from "react-redux"
import { useState } from "react"
import YouTube from "react-youtube"
import MusicContent from "./MusicContent"

var getYouTubeID = require('get-youtube-id')

function VideoContent() {

    let totalVideoAvailable = localStorage.getItem("videocodelength")
    const [arrayNum, setArrayNumber] = useState(0)

    function nextHandler() {
        setArrayNumber(arrayNum + 1)
    }

    function prevHandler() {
        setArrayNumber(arrayNum - 1)
    }

    function onReady(e) {
        // access to player in all event handlers via event.target
        e.target.playVideo();
    }

    let youtubeFullCode = localStorage.getItem(`videocontentcode${arrayNum}`)
    let currentVideo = youtubeFullCode

    var youtubeCode = getYouTubeID(currentVideo)

    if (arrayNum < -1) {
        nextHandler()
    }

    const opts = {
        height: '490',
        width: '690',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }

    return (
        <div className="videocontent my-5">
            {/* <p>current array item: {arrayNum}</p>
            <p>current array length: {youtubeArray.length}</p>
            <p>{youtubeArray[0]}</p> */}
            <span >
                {arrayNum > 0 && <button onClick={prevHandler}>Prev</button>}
                {arrayNum < totalVideoAvailable - 1 && <button onClick={nextHandler}>Next</button>}
            </span>
            <div>
                <YouTube videoId={youtubeCode} opts={opts} onReady={onReady} />
                {/* <iframe width="560" height="315"
                    src={currentVideo} title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe> */}
            </div>
            <MusicContent />
        </div>

    )
}

export default VideoContent