function MusicForm() {
    return (
        <div className="pracmusicmenu">
            <div>
                <h2>Music Choices</h2>
            </div>
            <div className="menubuttons">
                <form>
                    <div>
                        <button className="pracbtn">Piano</button>
                    </div>
                    <div>
                        <button className="pracbtn">Jazz</button>
                    </div>
                    <div>
                        <button className="pracbtn">Acoustic</button>
                    </div>
                    <div>
                        <button className="pracbtn">Lofi</button>
                    </div>
                    <div>
                        <button className="pracbtn">Yoga</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MusicForm