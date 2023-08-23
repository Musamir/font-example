import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

import Image from 'react-bootstrap/Image';
import mosque from '../../assets/img/mosque/mosque_wide.jpg';

import "./style.css"

function MainImage() {
    return (
        <Image src={mosque} className='image-wrapper'/>
    );
}

export default MainImage;