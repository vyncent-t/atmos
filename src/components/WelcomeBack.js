import useAuth from "../server/spotifyAuth"
import { Fragment } from "react"
import { useSelector } from "react-redux"


function WelcomeBack(props) {
    const isAuth = useSelector((state) => state.spotify.isSpotifyAuth)
    console.log(`welcome back comp loaded is auth ${isAuth}`)
    const code = props.newCode
    useAuth(code)


    return (
        <Fragment>
            <div className="mainpage">
                <div div className="containerdiv" >
                    <h1>Welcome back!</h1>
                    <div className="pracmenu">
                        <div><p>your code is {props.newCode}</p></div>
                        <button onClick={props.onRedirect}>authorize on spotify</button>
                    </div>
                </div >
            </div >
        </Fragment>
    )
}

export default WelcomeBack