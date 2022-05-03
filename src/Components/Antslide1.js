import React from 'react';
import { Carousel } from 'antd';
import './Antslide1.css';

function Antslide1() {

    function onChange(a, b, c) {
        console.log(a, b, c); }

  return (
    <div className='Genesis'>
         <Carousel autoplay effect="fade">
            <div className='slide1'></div>
            <div className='slide2'></div>
            <div className='slide3'></div>
            <div className='slide4'></div>
         </Carousel>
  </div>
  )
}

export default Antslide1