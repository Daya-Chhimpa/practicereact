import React, { useEffect, useState } from 'react';
import  ParallaxTilt  from 'react-parallax-tilt';
import './iphone.css'
import back1 from '../image/back1.jpeg'
import back2 from '../image/back2.jpeg'
import back3 from '../image/back3.jpeg'

const IphoneBack = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const secondImage = document.getElementById('second-image');

      secondImage.style.transform = `translateY(-${scrollPosition}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
    return (
        <div>
    {/* <div className="image-container">
        <img
          className="image-one"
          src={back1}
          alt="First Engine"
          style={{ transform: `translateY(-${scrollPosition}px)` }}
        />
        <img
          className="image-two"
          src={back2}
          alt="Second Engine Sketch"
          style={{ transform: `translateY(-${scrollPosition * 0.5}px)` }}
        />
      </div>
      <div> */}
         <div className="container">
      <img
        className="image first-image"
        src={back1}
        alt="First Image"
      />
      <img
        className="image second-image"
        src={back2}
        alt="Second Image"
        id="second-image"
      />
    </div>
      
   

         </div >
    )
}
export default IphoneBack;