import React from 'react';
import styled from 'styled-components';
import water from './Images/water-image.jpg';

function Best() {
  return (
    <>
    <Mainx>
        <Mainleft src={water}/>
    
        <Mainright>
            <h1>BEST QUALITY</h1>
            <p>The five parameters of water quality have for each parameter,
                 its effect when compromised. There are qualities we usually
                  look for when it has to do with our drinking water: colourless
                   and chilled. These are only physical properties. But there 
                   are other more important parameters we should always be
                    sure of when we are looking for drinking water, even if
                     we want to bathe with it. They are: Microbial quality, pH
                     , Chemical quality (Trace elements, TDS, ORP, dissolved oxygen,
                      e.t.c.).  Boiling water takes care of microbial quality but
                       kills the water.  That is why you do not feel satisfied 
                       drinking boiled water, even when it is chilled! The parameters 
                       for water quality are important especially because of the long
                        term effects of poor quality water on health. Same applies to
                         indoor air quality. Someone could be having asthma attack 
                         because of the air quality of his or her environment. 
                         One observes better health when one changes the environment. 
                          This is where indoor air purifiers come in handy.</p>
                          <a href='https://wa.me/2349021702494' target="_blank" className='butn1'>Get More Info </a>
        </Mainright>
    </Mainx>
    </>
  )
}

export default Best


const Mainx=styled.div`
height: 600px;
width: 100%;
background-color:white;
display:flex;
justify-content:space-between;
padding:50px;
@media screen and (max-width:800px){
    display:flex;
    flex-direction:column;
    align-items:center;
    height:900px;
    
}
`
const Mainleft=styled.img`
height: 500px;
width: 600px;
border-radius:20px;
margin-left: 40px;
@media screen and (max-width:800px){
    display:flex;
    flex-direction:column;
    align-items:center;
    height:300px;
    width:350px;
    margin:10px;
}

`
const Mainright=styled.div`
height: 400px;
width:600px;
color:black;
text-align:center;
margin-right:40px;
    .butn1{
        padding: 10px 20px;
        background-color:yellowgreen;
        text-decoration:none;
        border-radius:20px;
        color:white;
    
    :hover{
        background-color:lightgrey;
        cursor:pointer;
        color:yellowgreen;
        border-color:yellowgreen;
        font-weight:bold;
        font-size: 12pt;
        border-width:5px;
        
    
    }
    
}
h1{
    font-size: 40pt;
    text-align:left;
    color:yellowgreen;
    font-weight:bold;
    font-family:monotype corsiva;
}
p{
    font-size: 12pt;
    text-align:center;
    text-align:justify;
    font-family:timesnew roman;
    
    }


    @media screen and (max-width:800px){
        display:flex;
        flex-direction:column;
        align-items:center;
        width:320px;
        margin-top:5px;
        
        
        h1{
            font-size:20pt;
            text-align:center;
            margin-top:-50px;
        }

        p{
            font-size:10pt;
            text-align:center;
            text-align:justify;
        }
}
`