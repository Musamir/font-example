import React from 'react'
import ramadan from '../../assets/text/ramadan'
import './style.css'

const mainTextBlock = ({ lan }) => {
    return (
        <div className="col-12 col-lg-6 mainTextBlock border rounded-end">
            {ramadan.get(lan)}
        </div>
    )
}

export default mainTextBlock