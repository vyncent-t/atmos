import { useEffect, useState } from 'react';
import axios from 'axios';


export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    //use effect method that retrieves and sets the access token every time the user logs in.
    useEffect(() => {
        axios
            .post('http://localhost:3005/login', {
                code,
            }).then(res => {
                console.log(res.data)
                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.RefreshToken)
                setExpiresIn(res.data.expiresIn)
                //removes data from url and sets it back to root
                window.history.pushState({}, null, '/')
            })
            //if an error occurs, bring the user back to the root page.
            .catch((err) => {
                console.log(err)
            })
    }, [code])


    //use effect method that runs whenever the refresh token or expiresIn timer runs out to set the new access token and new expiration time.
    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {

            axios
                .post('http://localhost:3005/refresh', {
                    refreshToken,
                })
                .then(res => {

                    setAccessToken(res.data.accessToken)
                    setExpiresIn(res.data.expiresIn)

                })
                .catch(() => {
                    window.location = "/"
                })
        }, (expiresIn - 60) * 1000)

        return () => clearInterval(interval)
    }, [refreshToken, expiresIn])


    return accessToken

}