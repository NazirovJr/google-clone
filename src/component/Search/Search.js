import React, {useState} from "react";
import "./Search.css"
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom"
import {useStateValue} from "../../Redux/StateProvider";
import {actionType} from "../../Redux/reduce/reducer";
const Search = ({hiddenButtons = false}) => {
    const [input, setInput] = useState("")
    const [state, dispatch] = useStateValue()
    let history = useHistory()
    const search = e => {
        e.preventDefault()
        dispatch({
            type:actionType.SET_SEARCH_TERM,
            term:input
        })
        history.push("/search")
    }
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search_inputIcons"/>
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon/>
            </div>
            {!hiddenButtons ?
                (
                    <div className="search__button">
                        <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                        <Button variant="outlined">I'm Feeling Lucky</Button>
                    </div>
                ) :
                (
                    <div className="search__button">
                        <Button className = 'search__buttonsHidden' type="submit" onClick={search} variant="outlined">Google Search</Button>
                        <Button  className = 'search__buttonsHidden' variant="outlined">I'm Feeling Lucky</Button>
                    </div>
                )}

        </form>
    )
}

export default Search