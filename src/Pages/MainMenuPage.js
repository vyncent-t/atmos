import MainMenu from '../components/MainMenu'
import content from '../images/tvlogo.png';
import styles from '../components/MainMenuStyles.module.css'


function MainMenuPage() {
    return (
        <div className={styles.containerdiv}>
            <MainMenu />
        </div>
    )
}

export default MainMenuPage