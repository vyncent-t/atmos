import { useState } from 'react';
import MusicButton from "./MusicButton"


function MusicForm() {
    const [musicGenre, setMusicGenre] = useState("no music choice");

    return (
        <div className="pracmusicmenu">
            <div>
                <h2>Music Choices</h2>
            </div>
            <div>
                <p>{`Your current music choice: ${musicGenre}`}</p>
            </div>
            <div className="menubuttons">
                <MusicButton musicKeyword="Piano"
                    userClick={keyword => setMusicGenre(keyword)} />
                <MusicButton musicKeyword="Jazz"
                    userClick={keyword => setMusicGenre(keyword)} />
                <MusicButton musicKeyword="Acoustic"
                    userClick={keyword => setMusicGenre(keyword)} />
                <MusicButton musicKeyword="Lofi"
                    userClick={keyword => setMusicGenre(keyword)} />
                <MusicButton musicKeyword="Yoga"
                    userClick={keyword => setMusicGenre(keyword)} />
            </div>
        </div>
    )
}

export default MusicForm