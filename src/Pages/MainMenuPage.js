import MainMenu from '../components/MainMenu'

function MainMenuPage() {
    return (
        <div className="mainpage">
            <div className="containerdiv">
                {/* <AtmosNavbar /> */}
                <h1>Menu</h1>
                <MainMenu text="Please select your content" />
            </div>
        </div>
    )
}

export default MainMenuPage