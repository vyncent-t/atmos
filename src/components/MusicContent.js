import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { controlActions } from "../store/UserControls"
import SpotifyWebApi from "spotify-web-api-node"



function MusicContent() {
    var musicid = useSelector((state) => state.spotify.clientid)
    const showContent = useSelector((state) => state.controls.showContentBox)
    const musicToken = useSelector((state) => state.spotify.accesstoken)
    const userMusic = useSelector((state) => state.content.musicButtonChoice)
    const dispatch = useDispatch()

    console.log(`spotify current search keyword from button is: ${userMusic}`)
    console.log(`spotify current token is: ${musicToken}`)

    const spotifyApi = new SpotifyWebApi({
        clientId: `${musicid}`,
    })

    spotifyApi.setAccessToken(`${musicToken}`)

    useEffect(() => {
        if (musicToken === "none token") return
        spotifyApi.setAccessToken(musicToken)
    }, [musicToken])


    const musicDummyID = `1DFixLWuPkv3KT3TnV35m3`


    spotifyApi.searchPlaylists(`${userMusic}`).then(
        (res) => {
            console.log(`playlist res:`, res.body)
        }
    ).catch((err) => {
        console.log('Something went wrong!', err);
    })

    function contentToggleHandler() {
        dispatch(controlActions.toggleContentBox())
    }

    return (
        <div className="musiccontent">
            <button onClick={contentToggleHandler}>Content on/off</button>
            {showContent && <div>
                <iframe title="playlist" src={`https://open.spotify.com/embed/album/${musicDummyID}`} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>}
        </div>
    )
}

export default MusicContent
