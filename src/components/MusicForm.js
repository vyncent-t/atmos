import MusicButton from "./MusicButton"
import { useSelector } from "react-redux"


function MusicForm(props) {
    const musicChoice = useSelector((state) => state.musicButtonChoice)

    return (
        <div className="pracmusicmenu">
            <div>
                <h2>Music Choices</h2>
            </div>
            <div>
                <p>{`Your current music choice: ${musicChoice}`}</p>
            </div>
            <div className="menubuttons">
                <MusicButton musicKeyword="Piano" />
                <MusicButton musicKeyword="Jazz" />
                <MusicButton musicKeyword="Acoustic" />
                <MusicButton musicKeyword="Lofi" />
                <MusicButton musicKeyword="Yoga" />
            </div>
        </div>
    )
}

export default MusicForm