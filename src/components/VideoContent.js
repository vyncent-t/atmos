import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useState } from "react"
import YouTube from "react-youtube"

var getYouTubeID = require('get-youtube-id')

function VideoContent() {
    const youtubeArray = useSelector((state) => state.youtube.currentContent)
    const [arrayNum, setArrayNumber] = useState(0)

    function nextHandler() {
        setArrayNumber(arrayNum + 1)
    }

    function prevHandler() {
        setArrayNumber(arrayNum - 1)
    }

    function _onReady(e) {
        // access to player in all event handlers via event.target
        e.target.pauseVideo();
    }

    // var videoCodes = [
    //     "https://www.youtube.com/embed/5qap5aO4i9A",
    //     "https://www.youtube.com/embed/5yx6BWlEVcY",
    //     "https://www.youtube.com/embed/em88JdiM8bM"
    // ]

    let currentVideo = youtubeArray[arrayNum]
    var youtubeCode = getYouTubeID(currentVideo)

    if (arrayNum < -1) {
        nextHandler()
    }

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }

    return (
        <div className="videocontent">
            <p>current array item: {arrayNum}</p>
            <p>current array length: {youtubeArray.length}</p>
            <p>{youtubeArray[0]}</p>
            <span>
                {arrayNum > 0 && <button onClick={prevHandler}>Prev</button>}
                {arrayNum < youtubeArray.length - 1 && <button onClick={nextHandler}>Next</button>}
            </span>
            <div>
                <YouTube videoId={youtubeCode} opts={opts} onReady={_onReady} />
                {/* <iframe width="560" height="315"
                    src={currentVideo} title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe> */}
            </div>
        </div>
    )
}

export default VideoContent