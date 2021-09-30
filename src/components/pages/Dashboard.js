import React, { useEffect , useState} from 'react'
import useAuth from '../useAuth'
import {Container, Form, Button} from 'react-bootstrap'
import SpotifyWebApi from 'spotify-web-api-node'
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

const {REACT_APP_CLIENT_ID} = process.env;
const spotifyApi = new SpotifyWebApi({
    clientid: "50885eb87ce14757bdde10e7fb01f91a"
})


export default function Dashboard ({code}) {
const accessToken = useAuth(code)
const [search, setSearch] = useState('')
const [searchResults, setSearchResults] = useState([])

//use effect method that sets the new access token whenever the access token data changes; if there is no access token, the new access token will be set.
useEffect(() => {
    if (!accessToken) return
spotifyApi.setAccessToken(accessToken)
}, [accessToken])

//use effect method that happens whenever the access token or the search criteria changes. if there is no search data, return an empty array; if there is no access token ,return nothing.
useEffect(() => {
if (!search) return setSearchResults([])
if(!accessToken) return 
//searchPlaylists is a call inherent to spotifyApi that takes in the search variable and returns arrays of playlists pertaining to that variable.
spotifyApi.searchPlaylists(search).then(res =>{
    console.log(res.body.playlists.items)

    const playlistA = res.body.playlists.items[1].id
    console.log(`PLAYLIST CODE: ${playlistA}`)

    var playlistB = res.body.playlists.items[2].id
    console.log(`PLAYLIST CODE: ${playlistB}`)

    var playlistC = res.body.playlists.items[3].id
    console.log(`PLAYLIST CODE: ${playlistC}`)

    var playlistD = res.body.playlists.items[4].id
    console.log(`PLAYLIST CODE: ${playlistD}`)

    var playlistCodes = [playlistA,playlistB,playlistC,playlistD]
    console.log(`Playlist codes: ${playlistCodes}`)

    var randomPositionGenre = Math.floor(Math.random()*playlistCodes.length);
    var randomPlaylist = playlistCodes[randomPositionGenre]
    console.log(randomPlaylist)


    //   Build url to have iframe embedded
    var songFind = $("<iframe>");
    var spotifyIframe = $("#spotify-frame");
    let songFindAddy = `https://open.spotify.com/embed/playlist/${randomPlaylist}`;

        spotifyIframe.empty();
		songFind.attr("src", songFindAddy);
		songFind.attr("width", "300");
		songFind.attr("height", "380");
		songFind.attr("frameborder", "0");
        songFind.attr("allowtransparency", "true");
        songFind.attr("allow", "encrypted-media");
		songFind.appendTo(spotifyIframe);
	console.log(songFindAddy);
})
}, [search, accessToken])

    return <Container className='d-flex flex-column py-2' style={{height: '100vh'}}>

<Button
type="button"
className="d-grid gap-2"
size="lg"
placeholder='jazz'
value={search}
onClick={e => setSearch('jazz')}>Jazz</Button>
<Button
type="button"
className="d-grid gap-2"
size="lg"
className="btn btn-lrg btn-block"
placeholder='lo-fi'
value={search}
onClick={e => setSearch('lo-fi')}>Lo-Fi</Button>
         
         <p class="notification is-info is-size-5" id="spotify-frame"> Your playlist</p>
     </Container>
     
}