import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './../../../Images/img1.png';
import img2 from './../../../Images/img2.png';
import img3 from './../../../Images/img3.png';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 mh-25 slide"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>We have best Doctors for your treatment.</h3>
      <p>You can get deatils of them in Doctors page.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slide"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Vaccination.</h3>
      <p>We give neccesary vaccine to children.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slide"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Surgery</h3>
      <p>We have a best surgery team for cardiac arrest.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
      
      
    );
};

export default Banner;