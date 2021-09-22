import { useDispatch } from "react-redux"
import { contentActions } from "../store/index"

function MusicButton(props) {
    const keyword = props.musicKeyword
    const dispatch = useDispatch()

    const setMusicGenre = () => {
        dispatch(contentActions.updateMusicContent(keyword))
        console.log(`user chose ${keyword} as their music choice via button`)
    }
    return (
        <div>
            <button className="btn btn-success text-light m-1" onClick={setMusicGenre}>{keyword}</button>
        </div>
    )
}

export default MusicButton