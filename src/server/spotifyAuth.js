import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { spotifyActions } from '../store/SpotifyState';
import axios from 'axios';


export default function useAuth(code) {
    var accesstoken = useSelector((state) => state.spotify.accesstoken)


    var authcode = useSelector((state) => state.spotify.authcode)

    const dispatch = useDispatch()
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
                // let codePocket = "http://localhost:3000/menu"
                // window.location.href = codePocket
            })
            .catch((err) => {
                console.log(err)
            })
    }, [authcode])


    //use effect method that runs whenever the refresh token or expiresIn timer runs out to set the new access token and new expiration time.
    var refreshtoken = useSelector((state) => state.spotify.refreshtoken)
    var expiresin = useSelector((state) => state.spotify.expiresin)


    // useEffect(() => {

    //     if (!refreshtoken || !expiresin) return

    //     const interval = setInterval(() => {
    //         axios
    //             .post('http://localhost:3001/refresh', {
    //                 refreshtoken,
    //             })
    //             .then(res => {

    //                 dispatch(spotifyActions.updateSpotifyAccess(res.data.accessToken))

    //                 dispatch(spotifyActions.updateSpotifyExpire(res.data.expiresIn))

    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //             })
    //     }, (expiresin - 600) * 1000)

    //     return () => clearInterval(interval)
    // }, [refreshtoken, expiresin])


    return accesstoken

}