import { Fragment } from "react"
import { useSelector } from "react-redux"


function Welcome(props) {

    const isAuth = useSelector((state) => state.spotify.isSpotifyAuth)
    console.log(`welcome comp loaded is auth ${isAuth}`)

    return (
        <Fragment>
            <div className="mainpage">
                <div div className="containerdiv" >
                    <h1>Welcome to Atmos</h1>
                    <div className="pracmenu">
                        <p>You will need to be redirected!</p>
                        <div>
                            <button onClick={props.userWelcome}>Continue?</button>
                        </div>
                        {isAuth && (<div><button onClick={props.onRedirect}>authorize on spotify</button></div>)}
                    </div>
                </div >
            </div >
        </Fragment>
    )
}

export default Welcome