import React, { Fragment } from "react";
import SpotifyPlayer from 'react-spotify-web-playback';

function SpotifyMusicPlayer(props) {

    var accessToken = localStorage.getItem("spotifyToken")
    var playlist = localStorage.getItem("playlistCodes")
    console.log(`playlists from music????`, playlist)


    return (
        <Fragment>

            <SpotifyPlayer
                token={`${accessToken}`}
                uris={[`${playlist}`]}
                autoPlay={true}
            />
        </Fragment>
    )
}

export default SpotifyMusicPlayer