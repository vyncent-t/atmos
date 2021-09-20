function VideoButton(props) {

    function printKeyword() {
        console.log(`User has chosen ${props.videoKeyword} as their video choice`)
    }

    return (
        <div>
            <button className="pracbtn" onClick={printKeyword}>{props.videoKeyword}</button>
        </div>
    )
}

export default VideoButton