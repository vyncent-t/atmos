import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useState } from "react"

function VideoContent() {
    const youtubeArray = useSelector((state) => state.youtube.currentContent)


    const [arrayNum, setArrayNumber] = useState(0)

    function nextHandler() {
        setArrayNumber(arrayNum + 1)
    }

    function prevHandler() {
        setArrayNumber(arrayNum - 1)
    }

    var videoCodes = [
        "https://www.youtube.com/embed/5qap5aO4i9A",
        "https://www.youtube.com/embed/5yx6BWlEVcY",
        "https://www.youtube.com/embed/em88JdiM8bM"
    ]

    let currentVideo = videoCodes[arrayNum]

    if (arrayNum < -1) {
        nextHandler()
    }


    return (
        <div className="videocontent">
            <p>current array item: {arrayNum}</p>
            <p>current array length: {videoCodes.length}</p>
            <p>{youtubeArray[0]}</p>
            <span>
                {arrayNum > 0 && <button onClick={prevHandler}>Prev</button>}
                {arrayNum < videoCodes.length - 1 && <button onClick={nextHandler}>Next</button>}
            </span>
            <div>
                <iframe width="560" height="315"
                    src={currentVideo} title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
        </div>
    )
}

export default VideoContent