import React from 'react';
import './Whatsapp.css';
import {BsWhatsapp} from 'react-icons/bs';

function whatsapp() {
  return (
    <>
    <a
        href="https://wa.me/2349021702494"
        className="whatsapp-Bubble"
        target="_blank"
        rel="noopener noreferrer">
        <BsWhatsapp/>
      </a>
      

    </>
  )
}

export default whatsapp