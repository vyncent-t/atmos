import React from 'react';

const Home = () => {

    var redirect_uri = "https://vyncent-t.github.io/atmosphere-project/"; 

    var client_id = "50885eb87ce14757bdde10e7fb01f91a"; 
    var client_secret = "4acdaecbdc96463bbe8daee8d938550c"; 
    
    
    const AUTHORIZE = "https://accounts.spotify.com/authorize"
    const TOKEN = "https://accounts.spotify.com/api/token";
    
    
    function onPageLoad(){
       
    
        if ( window.location.search.length > 0 ){
            handleRedirect();
            $('#authbutton').hide()
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
        refresh_token = localStorage.getItem("refresh_token");
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
        if ( this.status == 200 ){
            var data = JSON.parse(this.responseText);
            console.log(data);
            if ( data.access_token != undefined ){
                spotify_token = data.access_token;
                 //localStorage.setItem("access_token", access_token);
            }
            if ( data.refresh_token  != undefined ){
                refresh_token = data.refresh_token;
                 //localStorage.setItem("refresh_token", refresh_token);
            }
            onPageLoad();
        }
        else {
            console.log(this.responseText);
            alert(this.responseText);
        }
    }
    
    

    return (
        <div>
<input id="spotifycontent" class="btn btn-primary btn-lg" type="button" onclick="requestAuthorization()" value="Request Authorization"></input>


        </div>
    )
}

export default Home;