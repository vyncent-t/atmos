function MusicButton(props) {

    function printKeyword() {
        console.log(`User has chosen ${props.musicKeyword} as their music choice`)
    }

    return (
        <div>
            <button className="pracbtn" onClick={printKeyword}>{props.musicKeyword}</button>
        </div>
    )
}

export default MusicButton