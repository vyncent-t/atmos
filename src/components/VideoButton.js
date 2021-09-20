function VideoButton(props) {

    function printKeyword() {
        console.log(`User has chosen ${props.videoKeyword} as their video choice`)
    }

    return (
        <div>
            <button className="btn btn-info text-light m-1" onClick={printKeyword}>{props.videoKeyword}</button>
        </div>
    )
}

export default VideoButton