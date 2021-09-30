import { Fragment } from "react"
import { useSelector } from "react-redux"

function WelcomeBack(props) {
    const isAuth = useSelector((state) => state.spotify.isSpotifyAuth)
    console.log(isAuth)


    return (
        <Fragment>
            <div className="mainpage">
                <div div className="containerdiv" >
                    <h1>Welcome to Atmos</h1>
                    <div className="pracmenu">
                        <p>you will need to be redirected!</p>
                        <button onClick={props.onRedirect}>authorize on spotify</button>
                    </div>
                </div >
            </div >
        </Fragment>
    )
}

export default WelcomeBack