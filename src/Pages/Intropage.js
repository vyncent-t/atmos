
import { useDispatch, useSelector } from "react-redux"
import { spotifyActions } from "../store/SpotifyState"
import { useLocation } from "react-router-dom"


//url used to authorize the spotify api and retrieve an access token along with the scope of parameters that we are asking permission for.
// const AUTHORIZE = 'https://accounts.spotify.com/authorize?client_id=50885eb87ce14757bdde10e7fb01f91a&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'



function Intropage() {
    const location = useLocation()
    console.log(location)
    const locationCode = location.search.slice(6)
    console.log(locationCode)



    const isAuth = useSelector((state) => state.spotify.isSpotifyAuth)



    const dispatch = useDispatch()

    function userSpotifyAuthHandler() {
        dispatch(spotifyActions.updateSpotifyAuth())
        // window.location.href(AUTHORIZE)
        requestSpotifyAuth()
    }

    console.log(isAuth)
    const client_id = useSelector((state) => state.spotify.clientid)
    // const client_secret = useSelector((state) => state.spotify.clientsecret)

    function requestSpotifyAuth() {

        const redirect_uri = "http://localhost:3000"


        const authlink = "https://accounts.spotify.com/authorize"

        var url = authlink;
        url += "?client_id=" + client_id;
        url += "&response_type=code";
        url += "&redirect_uri=" + encodeURI(redirect_uri);
        // url += "&show_dialog=true";
        url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
        window.location.href = url
    }

    if (locationCode) {
        return (
            <div className="mainpage">
                <div div className="containerdiv" >
                    <h1>Welcome to Atmos</h1>
                    <div className="pracmenu">
                        <p>{locationCode}</p>
                        <button onClick={userSpotifyAuthHandler}>authorize on spotify</button>
                    </div>
                </div >
            </div >
        )
    } else {
        return (
            <div className="mainpage">
                <div div className="containerdiv" >
                    <h1>Welcome to Atmos</h1>
                    <div className="pracmenu">
                        <p>You will be redirected to spotify when you press the button</p>
                        <button onClick={userSpotifyAuthHandler}>authorize on spotify</button>
                    </div>
                </div >
            </div >
        )
    }

}

export default Intropage