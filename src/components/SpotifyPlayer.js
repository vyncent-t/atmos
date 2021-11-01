import React, { Fragment } from "react";
import SpotifyPlayer from 'react-spotify-web-playback';
import { useState } from "react"

function SpotifyMusicPlayer(props) {
    const [arrayNum, setArrayNumber] = useState(0)

    function nextHandler() {
        setArrayNumber(arrayNum + 1)
    }

    function prevHandler() {
        setArrayNumber(arrayNum - 1)
    }

    if (arrayNum < -1) {
        nextHandler()
    }

    if (arrayNum > 10) {
        prevHandler()
    }

    var accessToken = localStorage.getItem("spotifyToken")
    var playlistCode = localStorage.getItem(`musicplaylistcode${arrayNum}`)
    console.log(`current spotify playlist`, playlistCode)

    let customStyleSpotfy = {
        bgColor: "dark blue"
    }

    return (
        <Fragment>
            <span >
                {arrayNum > 0 && <button onClick={prevHandler}>Prev</button>}
                {arrayNum < 10 && <button onClick={nextHandler}>Next</button>}
            </span>
            <SpotifyPlayer
                initialVolume={0.2}
                uris={[`${playlistCode}`]}
                autoPlay={true}
                token={`${accessToken}`}
                showSaveIcon={true}
                styles={customStyleSpotfy}
            />
        </Fragment>
    )
}

export default SpotifyMusicPlayer