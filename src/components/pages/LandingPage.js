import React from 'react';
import title from '../../images/title.png';
import tv from '../../images/tvlogo.png';
import button from '../../images/switch.png';
import { AnimationWrapper } from 'react-hover-animation'

//styling
const styles = {
    margin: 'none',
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
    paddingLeft: '46%',
    cursor: 'pointer'
   
}


const LandingPage = () => {




//url used to authorize the spotify api and retrieve an access token along with the scope of parameters that we are asking permission for.
const AUTHORIZE = 'https://accounts.spotify.com/authorize?client_id=50885eb87ce14757bdde10e7fb01f91a&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'



    return (
    <div style={styles}>
        
        <div style={align}>
        <img alt="" src={title}></img>
        </div>

        <div style={drop}>
        <img alt="" src={tv}></img>
        </div>

        <p style={text} >A Visual Auditory Experience</p>
        <AnimationWrapper>
        <a  type='button' href={AUTHORIZE} style={buttonStyle} ><img alt="" src={button}></img></a>
        </AnimationWrapper>

        </div>
    )
}

export default LandingPage;