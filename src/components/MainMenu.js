import { Link } from "react-router-dom";
import MusicForm from './MusicForm';
import VideoForm from './VideoForm';

import { AnimationWrapper } from 'react-hover-animation'
import styles from './MainMenuStyles.module.css'


function MainMenu(props) {
    return (
        <div className={styles.mainMenu}>
            <h2>Please select your content</h2>
            <div className={styles.formContainer}>
                <MusicForm />
                <VideoForm />
            </div>
            <div>
                <AnimationWrapper>
                    <Link to="/dashboard" className="m-3 btn btn-success">Create Atmos
                    </Link>
                </AnimationWrapper></div>
        </div>
    )
}

export default MainMenu;