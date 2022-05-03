import React from 'react';
import { Carousel } from 'antd';
import './Antslide2.css';

function Antslide2() {

    function onChange(a, b, c) {
        console.log(a, b, c); }

  return (
    <div className='Genesis2'>
         <Carousel autoplay effect="fade">
            <div className='slide5'></div>
            <div className='slide6'></div>
            <div className='slide7'></div>
            <div className='slide8'></div>
         </Carousel>
  </div>
  )
}

export default Antslide2