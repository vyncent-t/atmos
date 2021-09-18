import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import title from '../../images/title.png';
import tv from '../../images/tvlogo.png';
import button from '../../images/switch.png';

//styling
const styles = {
    background: '#7fb069',
}

const align = {
display: 'flex',
justifyContent: 'center'
}

const text = {
    color: '#ece4b7',
    fontFamily: 'OCR A Std',
    display: 'flex',
justifyContent: 'center',
fontSize: 22
}

const drop = {
    filter: 'drop-shadow(40px 20px 12px )',
    display: 'flex',
justifyContent: 'center'
}

const buttonStyle = {
    border:"none",
    backgroundColor:"transparent",
    outline:"none",
    margin:'none',
    display: 'flex',
justifyContent: 'center'
}


const LandingPage = () => {

  //jquery script
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    var redirect_uri = "https://vyncent-t.github.io/atmosphere-project/"; 

    var client_id = "50885eb87ce14757bdde10e7fb01f91a"; 
    var client_secret = "4acdaecbdc96463bbe8daee8d938550c"; 
    
    
    const AUTHORIZE = "https://accounts.spotify.com/authorize"
    const TOKEN = "https://accounts.spotify.com/api/token";
    
    
    function onPageLoad(){
       
    
        if ( window.location.search.length > 0 ){
            handleRedirect();
            ('#authbutton').hide()
        }
            }
    
    function handleRedirect(){
        let code = getCode();
        fetchAccessToken( code );
        window.history.pushState("", "", redirect_uri); 
    }
    
    function getCode(){
        let code = null;
        const queryString = window.location.search;
        if ( queryString.length > 0 ){
            const urlParams = new URLSearchParams(queryString);
            code = urlParams.get('code')
        }
        return code;
    }
    
    //Concatenated urls to retrieve authorization,access and refresh tokens.
    function requestAuthorization(){
    
        let url = AUTHORIZE;
        url += "?client_id=" + client_id;
        url += "&response_type=code";
        url += "&redirect_uri=" + encodeURI(redirect_uri);
        url += "&show_dialog=true";
        url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
        window.location.href = url; // Show Spotify's authorization screen
    }
    
    function fetchAccessToken( code ){
        let body = "grant_type=authorization_code";
        body += "&code=" + code; 
        body += "&redirect_uri=" + encodeURI(redirect_uri);
        body += "&client_id=" + client_id;
        body += "&client_secret=" + client_secret;
        callAuthorizationApi(body);
    }
    
    function refreshAccessToken(code){
        const refresh_token = localStorage.getItem("refresh_token");
        let body = "grant_type=refresh_token";
        body += "&refresh_token=" + refresh_token;
        body += "&client_id=" + client_id;
        callAuthorizationApi(body);
    }
    
    //Header for Authorization call
    function callAuthorizationApi(body){
        let xhr = new XMLHttpRequest();
        xhr.open("POST", TOKEN, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Authorization', 'Basic ' + btoa(client_id + ":" + client_secret));
        xhr.send(body);
        xhr.onload = handleAuthorizationResponse;
    }
    
    
    
    function handleAuthorizationResponse(){
        if ( this.status === 200 ){
            var data = JSON.parse(this.responseText);
            console.log(data);
            if ( data.access_token !== undefined ){
                const spotify_token = data.access_token;
                 //localStorage.setItem("access_token", access_token);
            }
            if ( data.refresh_token  !== undefined ){
                const refresh_token = data.refresh_token;
                 //localStorage.setItem("refresh_token", refresh_token);
            }
            onPageLoad();
        }
        else {
            console.log(this.responseText);
            alert(this.responseText);
        }
    }
    
    

    return (<Container style={styles}>
        <Col >

        <Row style={align}>
        <img alt="" src={title}></img>
        </Row>

        <Row style={drop}>
        <img alt="" src={tv}></img>
        </Row>

        <p style={text} >A Visual Auditory Experience</p>

        <Row>
<button id="spotifycontent" type='button' style={buttonStyle} onClick={requestAuthorization}><img alt="" src={button}></img></button>
</Row>

        </Col>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

        </Container>
    )
}

export default LandingPage;