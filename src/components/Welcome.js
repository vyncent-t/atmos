import { useSelector } from "react-redux"
import title from '../images/title.png';
import tv from '../images/tvlogo.png';
import { AnimationWrapper } from 'react-hover-animation'
import styles from './welcomeStyles.module.css'

//styling


function Welcome(props) {

    const isAuth = useSelector((state) => state.spotify.isSpotifyAuth)
    console.log(`welcome comp loaded is auth ${isAuth}`)

    return (
        <div className={styles.bg}>
            <div  className={styles.align}>
                <div><p>anything</p></div>
                <div className={styles.working}>
                <img alt="" className="img-fluid" src={title}></img>
                <div className={styles.drop}>
        <img className="img-fluid mb-3" alt="" src={tv}></img>
        </div>
        <p className={styles.text} >A Visual Auditory Experience</p>
        <p className={styles.texts} >*Premium Spotify Required</p>
        <AnimationWrapper>
                    <div >
                        <div>
                            <button className="my-2"className={styles.buttonStyles} onClick={props.userWelcome}>Continue?</button>
                        </div>
                        {isAuth && (<div><button className={styles.buttonStyles} onClick={props.onRedirect}>Authorize on Spotify</button></div>)}
                    </div>
                    </AnimationWrapper>
                </div >
            </div >
        </div>
    )
}

export default Welcome