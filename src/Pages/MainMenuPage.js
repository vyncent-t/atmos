import MainMenu from '../components/MainMenu'
import content from '../images/contentSelect.png';
import styles from '../components/MainMenuStyles.module.css'

const drop = {
    filter: 'drop-shadow(12px 12px 12px )',
    display: 'flex',
    justifyContent: 'center'
}


function MainMenuPage() {
    return (
        <div className={styles.mainpage}>
            <div className={styles.containerdiv}>
                {/* <AtmosNavbar /> */}
                <div style={drop}>
                    <img alt="" src={content}></img>
                </div>
                <MainMenu />
            </div>
        </div>
    )
}

export default MainMenuPage