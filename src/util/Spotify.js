
// https://accounts.spotify.com/authorize
// ?client_id=50885eb87ce14757bdde10e7fb01f91a
// &response_type=code
// &redirect_uri=http://localhost:3000
// &scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state

// import { useSelector } from "react-redux"


// function requestSpotifyAuth() {

//     const redirect_uri = "http://localhost:3000"

//     const client_id = useSelector((state) => state.spotify.clientit)
//     const client_secret = useSelector((state) => state.spotify.clientsecret)

//     const authlink = "https://accounts.spotify.com/authorize"

//     var url = authlink;
//     url += "?client_id" + client_id;
//     url += "&response_type=code";
//     url += "&redirect_uri" + encodeURI(redirect_uri);
//     url += "&show_dialog=true";
//     url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
//     window.location.href = url
// }

// export default requestSpotifyAuth