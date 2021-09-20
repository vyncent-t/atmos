function MusicButton(props) {

    function printKeyword() {
        console.log(`User has chosen ${props.musicKeyword} as their music choice`)
    }

    return (
        <div>
            <button className="btn btn-success text-light m-1" onClick={printKeyword}>{props.musicKeyword}</button>
        </div>
    )
}

export default MusicButton