import { Fragment } from "react"
import { useSelector } from "react-redux"
import title from '../images/title.png';
import tv from '../images/tvlogo.png';
import button from '../images/switch.png';
// import { AnimationWrapper } from 'react-hover-animation'

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
const texts = {
    color: '#ece4b7',
    fontFamily: 'OCR A Std',
    display: 'flex',
justifyContent: 'center',
fontSize: 15
}

const drop = {
    filter: 'drop-shadow(40px 20px 12px )',
    display: 'flex',
justifyContent: 'center'
}


const buttonStyles = {
    display: 'flex',
    textAlign: "center",
    margin: "auto",
    cursor: 'pointer'
   
}

function Welcome(props) {

    const isAuth = useSelector((state) => state.spotify.isSpotifyAuth)
    console.log(`welcome comp loaded is auth ${isAuth}`)

    return (
        <div style={styles}>
            <div  style={align}>
                <div >
                <img alt="" src={title}></img>
                <div style={drop}>
        <img alt="" src={tv}></img>
        </div>
        <p style={text} >A Visual Auditory Experience</p>
        <p style={texts} >*Premium Spotify Required</p>
                    <div style={styles}>
                        <div>
                            <button  style={buttonStyles} onClick={props.userWelcome}>Continue?</button>
                        </div>
                        {isAuth && (<div><button style={buttonStyles} onClick={props.onRedirect}>Authorize on Spotify</button></div>)}
                    </div>
                </div >
            </div >
        </div>
    )
}

export default Welcome