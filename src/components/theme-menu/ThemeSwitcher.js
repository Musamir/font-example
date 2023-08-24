import React from 'react'

import Button from 'react-bootstrap/Button';
import {changeMode} from '../../redux/reducers/ThemeReducer';
import {useDispatch} from 'react-redux';

import {CgDarkMode} from 'react-icons/cg'
import {IconContext} from 'react-icons';
import {FaFacebookSquare} from 'react-icons/fa';
import {BsFillBrightnessHighFill, BsFillBrightnessLowFill} from 'react-icons/bs';
import Container from 'react-bootstrap/Container';

const ThemeMenu = (props) => {

    let theme = "outline-" + (props.theme === "dark"? "light": "dark")

    const dispatch = useDispatch();
    return (
        <div className='me-2'>
            < Button onClick={() => dispatch(changeMode())} variant={props.theme}>
                <IconContext.Provider value={{ color: "dark", className: "global-class-name", size: 30}}>
                        <BsFillBrightnessLowFill/>
                </IconContext.Provider>
            </Button>
        </div>
    )
}

export default ThemeMenu