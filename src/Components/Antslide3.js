import React from 'react';
import { Carousel } from 'antd';
import './Antslide3.css';

function Antslide3() {

    function onChange(a, b, c) {
        console.log(a, b, c); }

  return (
    <div className='Genesis3'>
         <Carousel autoplay effect="fade">
            <div className='slide9'></div>
            <div className='slide10'></div>
            <div className='slide11'></div>
            <div className='slide12'></div>
         </Carousel>
  </div>
  )
}

export default Antslide3