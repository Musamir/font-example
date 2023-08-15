import React from 'react'

import Button from 'react-bootstrap/Button';
import {changeMode} from '../../redux/reducers/ThemeReducer';
import {useDispatch} from 'react-redux';

import {CgDarkMode} from 'react-icons/cg'
import {IconContext} from 'react-icons';
import {FaFacebookSquare} from 'react-icons/fa';

const ThemeMenu = () => {

    const dispatch = useDispatch();
    return (
        <div className='me-2'>
            < Button onClick={() => dispatch(changeMode())} variant="outline-dark">
                <IconContext.Provider value={{ className: "global-class-name", size: 30}}>
                    <div>
                        <CgDarkMode/>
                    </div>
                </IconContext.Provider>
            </Button>
        </div>
    )
}

export default ThemeMenu