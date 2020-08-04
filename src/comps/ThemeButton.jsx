import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../redux'



const ThemeButton = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme)

    const handleClick = () => {
        dispatch(changeTheme())
    }


    return (
        <button className="btn-theme"
        onClick={() => handleClick()}>
            {theme ? "Dark" : "Light"}
        </button>
    )
}

export default ThemeButton
