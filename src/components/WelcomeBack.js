import useAuth from "../server/spotifyAuth"
import { Fragment } from "react"
import { useSelector } from "react-redux"


function WelcomeBack(props) {
    const isAuth = useSelector((state) => state.spotify.isSpotifyAuth)
    var accesstoken = useSelector((state) => state.spotify.accesstoken)
    console.log(`welcome back comp loaded is auth ${isAuth}`)
    console.log(`welcome back comp loaded is current access token ${accesstoken}`)
    var code = props.newCode
    useAuth(code)




    return (
        <Fragment>
            <div className="mainpage">
                <div div className="containerdiv" >
                    <h1>Welcome back!</h1>
                    <div className="pracmenu">
                        <div><p>Continue to the main menu!</p></div>
                        <button onClick={props.onContinue}>Continue</button>
                    </div>
                </div >
            </div >
        </Fragment>
    )
}

export default WelcomeBack