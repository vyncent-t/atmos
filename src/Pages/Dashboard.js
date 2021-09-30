import MusicContent from "../components/MusicContent";
import VideoContent from "../components/VideoContent";


function Dashboard() {

    return (
        <div className="mainpage">
            <div className="containerdiv">
                {/* <AtmosNavbar /> */}
                <h1>Dashboard</h1>
                <VideoContent />
                <MusicContent />

            </div>
        </div>
    )
}

export default Dashboard