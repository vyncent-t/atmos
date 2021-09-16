import React from 'react';
import { Container,Row,Button} from 'react-bootstrap';

const Spotify=() => {
   
function spotifyAlbumSearch (genre) {
//Object that holds all the spotify IDs for each genre
var genres = {

}

    function getRandomKey(object){
    var objectKeys = Object.keys(object);
    var randomPosition = Math.floor(Math.random()*objectKeys.length);
    return objectKeys[randomPosition];
}

 //debugger
    console.log('Print data from albums');
    genreChoice = genre;
    fetch(`https://api.spotify.com/v1/search?query=${genreChoice}&type=playlist`, {headers: {'Authorization': `Bearer ${spotify_token}`}})
    .then(response => response.json()).then(
        function (data) {
            console.log(data)
    var playlistA = data.playlists.items[0].id
    console.log(`PLAYLIST CODE: ${playlistA}`)

    var playlistB = data.playlists.items[1].id
    console.log(`PLAYLIST CODE: ${playlistB}`)

    var playlistC = data.playlists.items[2].id
    console.log(`PLAYLIST CODE: ${playlistC}`)

    var playlistD = data.playlists.items[3].id
    console.log(`PLAYLIST CODE: ${playlistD}`)

    var playlistCodes = [playlistA,playlistB,playlistC,playlistD]
    console.log(`Playlist codes: ${playlistCodes}`)


    console.log(genres)
    var randomPositionGenre = Math.floor(Math.random()*playlistCodes.length);
    var randomPlaylist = playlistCodes[randomPositionGenre]
    console.log(randomPlaylist)

    // Build url to have iframe embedded
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
        });
}

//Event listener for the ul genre selections
$("#genre-list").on("click", 'li', function(event){
    console.log(event);
    // Gets the value attribute that was selected
    var choiceValue = event.currentTarget.getAttribute("value");
    console.log(choiceValue);
    spotifyAlbumSearch(choiceValue);
});



    return (
        
<div>

    
</div>	


    )
}
export default Spotify;