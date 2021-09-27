const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');


const app = express();
app.use(cors())
app.use(bodyParser.json())

app.post('/refresh', (req,res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi ({
        redirectUri: 'http://localhost:3005',
        clientId: '50885eb87ce14757bdde10e7fb01f91a',
        clientSecret: '4acdaecbdc96463bbe8daee8d938550c',
        refreshToken,
    })

    spotifyApi
    .refreshAccessToken()
    .then(data => {
            console.log(data.body)
        })
        .catch(() => {
            res.sendStatus(400)
        })  
})

app.post('/login', (req,res) =>{
    const code = req.body.code
const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: '50885eb87ce14757bdde10e7fb01f91a',
    clientSecret: '4acdaecbdc96463bbe8daee8d938550c'
    
})

spotifyApi.authorizationCodeGrant(code).then(data =>{
    res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in
    })
}).catch(err => {
    console.log(err)
    res.sendStatus(400)
})
})

app.listen(3005)