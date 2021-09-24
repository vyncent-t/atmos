import VideoContent from "../components/VideoContent";


function ContentPage() {

    return (
        <div className="mainpage">
            <div className="containerdiv">
                {/* <AtmosNavbar /> */}
                <h1>Dashboard</h1>
                <VideoContent />
            </div>
        </div>
    )
}

export default ContentPage