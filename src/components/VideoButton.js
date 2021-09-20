function VideoButton(props) {
    let keyword = props.videoKeyword
    return (
        <div>
            <button className="btn btn-info text-light m-1" onClick={() => props.userAction(keyword)}>{props.videoKeyword}</button>
        </div>
    )
}

export default VideoButton