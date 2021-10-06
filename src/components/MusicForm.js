import MusicButton from "./MusicButton"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import SpotifyWebApi from "spotify-web-api-node"
import { contentActions } from "../store/Content"

var userMusicContent = `pending`

function MusicForm(props) {
    var musicid = useSelector((state) => state.spotify.clientid)
    const musicToken = useSelector((state) => state.spotify.accesstoken)
    const musicChoice = useSelector((state) => state.content.musicButtonChoice)
    const musicPlaylists = useSelector((state) => state.content.musicPlaylistCodes)

    const dispatch = useDispatch()

    const spotifyApi = new SpotifyWebApi({
        clientId: `${musicid}`,
    })

    spotifyApi.setAccessToken(`${musicToken}`)

    useEffect(() => {
        if (musicToken === "none token") return
        spotifyApi.setAccessToken(musicToken)
    }, [musicToken])


    function updateContent(content) {
        userMusicContent = content
        return userMusicContent
    }



    spotifyApi.searchPlaylists(`${musicChoice}`).then(
        (res) => {
            //save to an array?
            console.log(`playlist res:`, res.body)
            var playlistMusic = res.body.playlists.items
            var playlistCodes = playlistMusic.map(playlist => {
                return playlist.id
            })
            updateContent(playlistCodes)
        }
    ).catch((err) => {
        console.log('Something went wrong!', err);
    })

    useEffect(() => {
        console.log("new playlist changes", userMusicContent)
        console.log("current playlist state", musicPlaylists)
        dispatch(contentActions.updatePlaylists(userMusicContent))
    }, [userMusicContent])




    return (
        <div className="pracmusicmenu">
            <div>
                <h2>Music Choices</h2>
            </div>
            <div>
                <p>{`Your current music choice: ${musicChoice}`}</p>
            </div>
            <div className="menubuttons">
                <MusicButton musicKeyword="Piano" />
                <MusicButton musicKeyword="Jazz" />
                <MusicButton musicKeyword="Acoustic" />
                <MusicButton musicKeyword="Lofi" />
                <MusicButton musicKeyword="Yoga" />
            </div>
        </div>
    )
}

export default MusicForm