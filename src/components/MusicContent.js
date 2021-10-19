// import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { controlActions } from "../store/UserControls"
import SpotifyMusicPlayer from "./SpotifyPlayer"
// import SpotifyWebApi from "spotify-web-api-node"



function MusicContent() {
    // var musicid = useSelector((state) => state.spotify.clientid)
    const showContent = useSelector((state) => state.controls.showContentBox)
    const musicToken = useSelector((state) => state.spotify.accesstoken)
    const musicPlaylist = useSelector((state) => state.content.musicPlaylistCodes)
    // const userMusic = useSelector((state) => state.content.musicButtonChoice)
    const dispatch = useDispatch()

    // console.log(`spotify current search keyword from button is: ${userMusic}`)
    console.log(`spotify current token is: ${musicToken}`)


    // const spotifyApi = new SpotifyWebApi({
    //     clientId: `${musicid}`,
    // })

    // spotifyApi.setAccessToken(`${musicToken}`)

    // useEffect(() => {
    //     if (musicToken === "none token") return
    //     spotifyApi.setAccessToken(musicToken)
    // }, [musicToken])


    // const musicDummyID = `1DFixLWuPkv3KT3TnV35m3`

    // var userMusicContent = `pending`

    // spotifyApi.searchPlaylists(`${userMusic}`).then(
    //     (res) => {
    //         //save to an array?
    //         console.log(`playlist res:`, res.body)
    //         var playlistMusic = res.body.playlists.items
    //         var playlistCodes = playlistMusic.map(playlist => {
    //             return playlist.id
    //         })
    //         userMusicContent = playlistCodes
    //         console.log("current content list", userMusicContent)
    //     }
    // ).catch((err) => {
    //     console.log('Something went wrong!', err);
    // })


    function contentToggleHandler() {
        dispatch(controlActions.toggleContentBox())
    }

    var currentPlaylist = 0

    // console.log(userMusicContent)

    return (
        <div className="musiccontent">
            {/* <div>
                <button onClick={contentToggleHandler}>Toggle music on/off</button>
            </div> */}

            {showContent && <div>
                <SpotifyMusicPlayer />
                {/* <iframe title="playlist" src={`https://open.spotify.com/embed/playlist/${musicPlaylist[(currentPlaylist)]}`} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
            </div>}
        </div>
    )
}

export default MusicContent
