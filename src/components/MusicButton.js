function MusicButton(props) {
    let keyword = props.musicKeyword
    return (
        <div>
            <button className="btn btn-success text-light m-1" onClick={() => props.userClick(keyword)}>{props.musicKeyword}</button>
        </div>
    )
}

export default MusicButton