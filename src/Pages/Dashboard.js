import { Fragment } from "react";
// import MusicContent from "../components/MusicContent";
import VideoContent from "../components/VideoContent";
import AtmosNavbar from "../components/Navbar";


function Dashboard() {

    return (
        <Fragment>
            <AtmosNavbar />
            <div className="mainpage">
                <div className="containerdiv">
                    <span className="pracmenu">
                        <VideoContent />
                    </span>
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard