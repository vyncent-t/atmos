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

    if (arrayNum > 5) {
        prevHandler()
    }

    var accessToken = localStorage.getItem("spotifyToken")
    var playlistCode = localStorage.getItem(`musicplaylistcode${arrayNum}`)
    console.log(`current spotify playlist`, playlistCode)


    return (
        <Fragment>
            <span >
                {arrayNum > 0 && <button onClick={prevHandler}>Prev</button>}
                {arrayNum < 4 && <button onClick={nextHandler}>Next</button>}
            </span>
            <SpotifyPlayer
                token={`${accessToken}`}
                uris={[`${playlistCode}`]}
                autoPlay={true}
            />
        </Fragment>
    )
}

export default SpotifyMusicPlayer