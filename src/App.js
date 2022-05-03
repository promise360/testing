import React from 'react';
import 'antd/dist/antd.css';
import Nav from './Components/Nav';
import Carouzell from './Components/Carouzell';
import Services from './Components/Services';
import Best from './Components/Best';
import Footing from './Components/Footing';
import Contacts from './Components/Contact/Contact';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Whatsapp from '../src/Components/Whatsapp';


function App() {
  return (
    <>

    <Nav/>
    <br/><br/>
    <Carouzell/>
    <br/><br/>
    <Services/>
    <Best/>
    <Whatsapp/>
    <br/>
    <Contacts/>
    <br/>
    <Footing/>

    </>
  )
}

export default App