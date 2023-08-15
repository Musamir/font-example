import React from 'react'
import './style.css'
import ramadan from '../../assets/text/ramadan'

const textBlock = ({lan}) => {
    return (
        <div className="d-none d-lg-flex col-lg-3 textBlock border rounded-end">
            {ramadan.get(lan)}
        </div>
    )
}

export default textBlock