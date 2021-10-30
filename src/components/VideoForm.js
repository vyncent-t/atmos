import VideoButton from "./VideoButton"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { youtubeActions } from "../store/YouTubeState"

function VideoForm() {
    const dispatch = useDispatch()
    const videoChoice = useSelector((state) => state.youtube.currentChoice)
    const videoOptions = useSelector((state) => state.youtube.youtubechoices)
    let videoContent = []

    if (videoChoice === "Beach") {
        videoContent = videoOptions.Beach
        console.log("updated content", videoContent)
        dispatch(youtubeActions.updateContent(videoContent))
    }
    if (videoChoice === "Waterfall") {
        videoContent = videoOptions.Waterfall
        console.log("updated content", videoContent)
        dispatch(youtubeActions.updateContent(videoContent))
    }
    if (videoChoice === "City") {
        videoContent = videoOptions.City
        console.log("updated content", videoContent)
        dispatch(youtubeActions.updateContent(videoContent))
    }
    if (videoChoice === "Forest") {
        videoContent = videoOptions.Forest
        console.log("updated content", videoContent)
        dispatch(youtubeActions.updateContent(videoContent))
    }
    if (videoChoice === "Travel") {
        videoContent = videoOptions.Travel
        console.log("updated content", videoContent)
        dispatch(youtubeActions.updateContent(videoContent))
    } if (videoChoice === "no video") {
        console.log(`current video: ${videoChoice}`)
    }



    return (

        <div className="card bg-dark m-4">
            <div className="card-body">
                <div className="d-flex flex-column justify-content-center">
                    <div className="card-title">
                        <h2>Visual Choices</h2>
                    </div>
                    <div className="card-text">
                        <p>{`Your current video genre: ${videoChoice}`}</p>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <VideoButton videoKeyword="Beach" />
                        <VideoButton videoKeyword="Waterfall" />
                        <VideoButton videoKeyword="City" />
                        <VideoButton videoKeyword="Forest" />
                        <VideoButton videoKeyword="Travel" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoForm