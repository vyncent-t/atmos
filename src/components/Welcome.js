import { useSelector } from "react-redux"
import title from '../images/title.png';
import tv from '../images/tvlogo.png';
import button from '../images/switch.png';
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
    cursor: 'pointer',
    padding:'0.46em 1.6em',
	border:'0.1em solid #FFFFFF',
	borderRadius:'0.12em',
	boxSizing: 'border-box',
	textDecoration:'none',
	fontFamily:'OCR A Std',
	fontWeight:300,
	color:'#FFFFFF',
	textShadow: '0 0.04em 0.04em rgba(0,0,0,0.35)',
	backgroundColor:'#7fb069',
   
}


function Welcome(props) {

    const isAuth = useSelector((state) => state.spotify.isSpotifyAuth)
    console.log(`welcome comp loaded is auth ${isAuth}`)

    return (
        <div style={styles}>
            <div  style={align}>
                <div >
                <img alt="" className="img-fluid" src={title}></img>
                <div style={drop}>
        <img className="img-fluid" alt="" src={tv}></img>
        </div>
        <p style={text} >A Visual Auditory Experience</p>
        <p style={texts} >*Premium Spotify Required</p>
        <AnimationWrapper>
                    <div >
                        <div>
                            <button style={buttonStyles} onClick={props.userWelcome}>Continue?</button>
                        </div>
                        {isAuth && (<div><button style={buttonStyles} onClick={props.onRedirect}>Authorize on Spotify</button></div>)}
                    </div>
                    </AnimationWrapper>
                </div >
            </div >
        </div>
    )
}

export default Welcome