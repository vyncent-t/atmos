import React, { useEffect , useState} from 'react'
import useAuth from '../useAuth'
import {Container, Form, Button} from 'react-bootstrap'
import SpotifyWebApi from 'spotify-web-api-node'


const spotifyApi = new SpotifyWebApi({
    clientid: '50885eb87ce14757bdde10e7fb01f91a'
})


export default function Dashboard ({code}) {
const accessToken = useAuth(code)
const [search, setSearch] = useState('')
const [searchResults, setSearchResults] = useState([])

//use effect method that sets the new access token whenever the access token data changes; if there is no access token, nothing will be returned.
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
})
}, [search, accessToken])

    return <Container className='d-flex flex-column py-2' style={{height: '100vh'}}>
        {/* <Form.Control
         type='search'
          placeholder="search playlists"
    value={search}
    onChange={e => setSearch(e.target.value)}
     />
     
     <div className='flex-grow-1 my-2' style={{overflowY:'auto'}}>
         playlists
         </div> */}

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
         
     </Container>
}