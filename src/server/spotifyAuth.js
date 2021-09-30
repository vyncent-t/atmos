import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { spotifyActions } from '../store/SpotifyState';
import axios from 'axios';


export default function useAuth(code) {

    const dispatch = useDispatch()
    // const [accessToken, setAccessToken] = useState()
    // const [refreshToken, setRefreshToken] = useState()
    // const [expiresIn, setExpiresIn] = useState()

    //use effect method that retrieves and sets the access token every time the user logs in.
    useEffect(() => {
        axios
            .post('http://localhost:3001/login', {
                code,
            }).then(res => {
                console.log(res.data)

                dispatch(spotifyActions.updateSpotifyAccess(res.data.accessToken))

                dispatch(spotifyActions.updateSpotifyRefresh(res.data.refreshToken))

                dispatch(spotifyActions.updateSpotifyExpire(res.data.expiresIn))

                //removes data from url and sets it back to root
                window.history.pushState({}, null, '/')
            })
            //if an error occurs, bring the user back to the root page.
            .catch((err) => {
                console.log(err)
            })
    }, [code])


    //use effect method that runs whenever the refresh token or expiresIn timer runs out to set the new access token and new expiration time.
    // useEffect(() => {
    //     if (!refreshToken || !expiresIn) return
    //     const interval = setInterval(() => {

    //         axios
    //             .post('http://localhost:3001/refresh', {
    //                 refreshToken,
    //             })
    //             .then(res => {

    //                 setAccessToken(res.data.accessToken)
    //                 setExpiresIn(res.data.expiresIn)

    //             })
    //             .catch(() => {
    //                 window.location = "/"
    //             })
    //     }, (expiresIn - 60) * 1000)

    //     return () => clearInterval(interval)
    // }, [refreshToken, expiresIn])


    // return accessToken

}