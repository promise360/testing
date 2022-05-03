import React from 'react';
import styled from 'styled-components';
import Antslide1 from '../Components/Antslide1';
import Antslide2 from '../Components/Antslide2';
import Antslide3 from './Antslide3';

function Services() {
  return (
    <>
    <Main>

        <Tophold>
            <Boldtext>Our Services</Boldtext>
        </Tophold>

        <Bottomhold>
          
            <Left>
            <h1>Water Analysis/Treatment</h1>
          <p>We'll make sure that you
             have the best quality water that nature can provide.</p>
            <Antslide1/>
            </Left>
            <Middle>
            <h1>Plumbing/Repairs</h1>
           <p>We'll send a multi-skilled  repairman to your residential 
             or commercial property so you save the time and money.</p>
             <Antslide2/>
            </Middle>
            <Right>
            <h1>Indoor Air Purification and General Environmental Health Concerns</h1>
          <p>Our partners in environmental and naturopathic science covers all 
            your health / environmental concerns. </p>
            <Antslide3/>
            </Right>
            
        </Bottomhold>
    </Main>
    </>
  )
}

export default Services

const Main = styled.div`
height: 550px;
background-color: whitesmoke;
width: 100%;
color: black;
font-family:monotype corsiva;

@media screen and (max-width:800px){
  height:1140px;
}

`
const Tophold = styled.div`
height: 70px;
width:100%;
font-size: 20pt;
font-weight:bold;
@media screen and (max-width:800px){
  height:30px;
  width:100%;
  color:black;
  font-size:12pt;
  font-weight:bold;

}


`
const Boldtext = styled.h1`
color: black;
font-weight:bold;
`
const Bottomhold = styled.div`
display:flex;
justify-content:space-between;
padding: 40px;


@media screen and (max-width:800px)
{
  flex-direction:column;
  align-items:center;
  width:100%;
  padding:20px;
}
`

const Left = styled.div`
background-color:whitesmoke;
height 400px;
width: 400px;
border-radius:20px;
h1{
  font-weight:bold;
}

p{
  font-family:timesnew roman;
}

@media screen and (max-width:800px){
  height:300px;
  width:350px;
  margin-top:40px;
  p{
    font-size:12pt;
    margin-top:-13px;
  }
  h1{
    font-size:16pt;
    margin-top:-3px;
    font-weight:bold;
  }
}
`
const Middle = styled.div`
background-color:whitesmoke;
height 400px;
width: 400px;
border-radius:20px;

p{
  font-family:timesnew roman;
}
h1{
  font-weight:bold;
}
@media screen and (max-width:800px){
  height:300px;
  width:350px;
  margin-top:40px;
  p{
    font-size:12pt;
    margin-top:-13px;
  }
  h1{
    font-size:16pt;
    margin-top:-3px;
    font-weight:bold;
  }

`
const Right = styled.div`
background-color:whitesmoke;
height 400px;
width: 400px;
border-radius:20px;
h1{
  font-weight:bold;
}


p{
  font-family:timesnew roman;
}
@media screen and (max-width:800px){
  height:300px;
  width:350px;
  margin-top:40px;
  p{
    font-size:12pt;
    margin-top:-13px;
  }
  h1{
    font-size:16pt;
    margin-top:-3px;
    font-weight:bold;
  }

`