import useAuth from "../server/spotifyAuth"
import { useSelector } from "react-redux"
import { AnimationWrapper } from 'react-hover-animation'
import title from '../images/title.png';
import welcome from '../images/welcome.png';

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

const drop = {
    filter: 'drop-shadow(40px 20px 12px )',
    display: 'flex',
justifyContent: 'center'
}

const align = {
    display: 'flex',
    justifyContent: 'center'
    }
const styles = {
    margin: 'none',
    background: '#7fb069',
    height: '100vh',
    width: '100%'
}

function WelcomeBack(props) {
    const isAuth = useSelector((state) => state.spotify.isSpotifyAuth)
    var accesstoken = useSelector((state) => state.spotify.accesstoken)
    console.log(`welcome back comp loaded is auth ${isAuth}`)
    console.log(`welcome back comp loaded is current access token ${accesstoken}`)

    localStorage.setItem("spotifyToken", `${accesstoken}`)

    var code = props.newCode
    useAuth(code)




    return (
        <div style={styles}>
        <div  style={align}>
            <div >
           
            <div style={drop}>
    <img className="img-fluid" alt="" src={welcome}></img>
    </div>
            <AnimationWrapper>
                        <button style={buttonStyles} onClick={props.onContinue}>Enter</button>
            </AnimationWrapper>
        </div>
        </div>
        </div>
       
    )
}

export default WelcomeBack