import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

import Image from 'react-bootstrap/Image';
import mosque11 from '../../assets/img/mosque/mosque11.jpg';
import mosque22 from '../../assets/img/mosque/mosque22.jpeg';
import mosque33 from '../../assets/img/mosque/mosque33.jpg';
import mosque44 from '../../assets/img/mosque/mosque44.jpg';

import "./style.css"

function ImageSlides() {
    return (
        <Carousel style={{ height: '500px' }} >
            <Carousel.Item className='slider-item-wrapper'>

                <div className='slider-item-image-wrapper'>
                    <Image src={mosque11} rounded className='slider-item' />
                </div>
            </Carousel.Item >

            <Carousel.Item className='slider-item-wrapper'>

                <div className='slider-item-image-wrapper'>
                    <Image src={mosque33} rounded className='slider-item' />
                </div>
            </Carousel.Item>

            <Carousel.Item className='slider-item-wrapper'>

                <div className='slider-item-image-wrapper'>
                    <Image src={mosque44} rounded className='slider-item' />
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageSlides;