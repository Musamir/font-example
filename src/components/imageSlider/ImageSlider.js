import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

import Image from 'react-bootstrap/Image';
import mosque1 from '../../assets/img/mosque/mosque.jpg';
import mosque2 from '../../assets/img/mosque/mosque2.jpg';
import mosque3 from '../../assets/img/mosque/mosque3.jpg';
import mosque4 from '../../assets/img/mosque/mosque4.jpg';
import mosque_inside from '../../assets/img/mosque/mosque-inside.jpg';
import "./style.css"

function ImageSlides() {
    return (
        <Carousel className="slider">
            <Carousel.Item fluid>

                <Image className="slider" src={mosque1} rounded />

                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item >
            <Carousel.Item fluid>

                <Image src={mosque2} rounded />

                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item fluid>

                <Image src={mosque3} rounded />

                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item fluid>

                <Image src={mosque4} rounded />

                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item fluid>

                <Image src={mosque_inside} rounded/>

                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageSlides;