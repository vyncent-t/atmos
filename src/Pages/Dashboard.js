import MusicContent from "../components/MusicContent";
import VideoContent from "../components/VideoContent";


function Dashboard() {

    return (
        <div className="mainpage">
            <div className="containerdiv">
                {/* <AtmosNavbar /> */}
                
                <span className="pracmenu">
                    <VideoContent />
                   
                </span>

            </div>
        </div>
    )
}

export default Dashboard