import MusicButton from "./MusicButton"

function MusicForm() {
    return (
        <div className="pracmusicmenu">
            <div>
                <h2>Music Choices</h2>
            </div>
            <div className="menubuttons">
                <MusicButton musicKeyword="Piano"></MusicButton>
                <MusicButton musicKeyword="Jazz"></MusicButton>
                <MusicButton musicKeyword="Acoustic"></MusicButton>
                <MusicButton musicKeyword="Lofi"></MusicButton>
                <MusicButton musicKeyword="Yoga"></MusicButton>
            </div>
        </div>
    )
}

export default MusicForm