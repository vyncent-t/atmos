import MainMenu from '../components/MainMenu'
import content from '../images/contentSelect.png';

const drop = {
    filter: 'drop-shadow(12px 12px 12px )',
    display: 'flex',
justifyContent: 'center'
}
function MainMenuPage() {
    return (
        <div className="mainpage">
            <div className="containerdiv">
                {/* <AtmosNavbar /> */}
                <div style={drop}>
                <img alt="" src={content}></img>
                </div>
                <MainMenu  />
            </div>
        </div>
    )
}

export default MainMenuPage