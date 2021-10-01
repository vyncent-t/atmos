import useAuth from "../server/spotifyAuth"
import { useDispatch, useSelector } from "react-redux"
import { spotifyActions } from "../store/SpotifyState"
import { useLocation } from "react-router-dom"
import Welcome from "../components/Welcome"
import WelcomeBack from "../components/WelcomeBack"



//url used to authorize the spotify api and retrieve an access token along with the scope of parameters that we are asking permission for.
// const AUTHORIZE = 'https://accounts.spotify.com/authorize?client_id=50885eb87ce14757bdde10e7fb01f91a&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'



function Intropage() {
    const location = useLocation()
    console.log(location)
    const locationCode = location.search.slice(6)
    console.log(`current location code: ${locationCode}`)



    const isAuth = useSelector((state) => state.spotify.isSpotifyAuth)
    const musicPassword = useSelector((state) => state.spotify.authcode)
    const musicToken = useSelector((state) => state.spotify.accesstoken)



    const dispatch = useDispatch()

    function updateAccess(token) {
        dispatch(spotifyActions.updateSpotifyAccess(token))
    }


    function userSpotifyAuthHandler() {
        dispatch(spotifyActions.updateSpotifyCode(locationCode))
        // window.location.href(AUTHORIZE)
        requestSpotifyAuth()
    }

    function spotifyAuthToggler(onoff) {
        dispatch(spotifyActions.updateSpotifyAuth(onoff))
    }


    const authlink = useSelector((state) => state.spotify.spotifyAuthLink)
    // const client_id = useSelector((state) => state.spotify.clientid)
    // const client_secret = useSelector((state) => state.spotify.clientsecret)

    function requestSpotifyAuth() {

        // const redirect_uri = "http://localhost:3000"


        // const authlink = "https://accounts.spotify.com/authorize"

        var url = authlink;
        // url += "?client_id=" + client_id;
        // url += "&response_type=code";
        // url += "&redirect_uri=" + encodeURI(redirect_uri);
        // // url += "&show_dialog=true";
        // url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
        window.location.href = url
    }

    useAuth(locationCode)
    updateAccess(locationCode)
    console.log(`current token: ${musicToken}`)
    console.log(`current password: ${musicPassword}`)


    if (locationCode === "") {
        spotifyAuthToggler(false)
    } else {
        spotifyAuthToggler(true)
    }
    console.log(`page loaded is auth ${isAuth}`)



    if (isAuth === false) {
        return (
            <Welcome onRedirect={userSpotifyAuthHandler} />
        )
    } else {
        return (
            <WelcomeBack newCode={locationCode} />
        )
    }

}
export default Intropage