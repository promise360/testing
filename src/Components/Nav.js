import React, {useState} from 'react';
import styled from 'styled-components';
import {FaBars,FaTimes} from 'react-icons/fa';

function Nav() {
    const [click, setClick] = useState(false);

    const handClick = () => {
        setClick (!click)
    }

    
    




  return (
    <>
    <Mainhold>
        <Subhold>
            <Left></Left>

            

            <Right>
            <MobileIkon onClick={handClick}>
                {click ? <FaTimes/> : <FaBars/>}
             </MobileIkon>
                <Navbuttons onClick={handClick} click={click}>
                <p className='btn1'>Online Store</p>
                <a className='btn2' href='https://wellnessacademygroup.com/' target='_blank'>Wellness Academy Group</a>
                </Navbuttons>
            </Right>
        </Subhold>
    </Mainhold> 
    
    </>
  )
}

export default Nav

const Mainhold = styled.nav`

z-index:201;
background-color:whitesmoke;
height:75px;
width:100%;


`
const Subhold = styled.div`
display:flex;
justify-content: space-between;
background-color: whitesmoke;
width: 100%;
height: 70px;
position:fixed;
z-index:200;


`
const Left = styled.div`
display:flex;
align-items:center;

`
const MobileIkon = styled.div`
display:none;
color: yellowgreen;
font-size: 30px;
margin: 30px;



    @media screen and (max-width:800px) {

        display:block;
       
    }
`
const Right = styled.div`
display:flex;
align-items: center;

`
const Navbuttons = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
border-radius:20px;
width: 500px;
margin: 50px;
opacity: 80%;

    @media screen and (max-width:800px) {
    display:flex;
    flex-direction:column;
    position:absolute;
    justify-content: flex-start;
    top:50px;
    padding:0;
    margin:0;
    margin-top: 20px;
    height:35vh;
    width:50%;
    background: #101522;
    right: ${({click}) => (click ? 0 : '-100%')};
    transition: all 0.7s ease;
    z-index:100;
}



}

.btn2{
    
    background-color:yellowgreen;
    border-radius: 20px;
    border-color:transparent;
    color:White;
    font-weight: Bold;
    font-size: 10pt;
    cursor:pointer;
    padding: 10px 10px;
    margin:20px;

    :hover {
        color: yellowgreen;
        background-color:transparent;
        border-color:yellowgreen;
        border-width:3px;
        box-shadow: 0px 0px 0px 2px yellowgreen;
    }
    @media screen and (max-width : 850px){
        margin-top: 40px;
    }

}

.btn1{
    
    background-color:yellowgreen;
    border-radius: 20px;
    border-color:transparent;
    color:White;
    font-weight: Bold;
    font-size: 10pt;
    cursor:pointer;
    padding: 10px 20px;
    margin:: 30px;
    margin-top:10px;

    :hover {
        color: yellowgreen;
        background-color:transparent;
        border-color:yellowgreen;
        border-width:3px;
        box-shadow: 0px 0px 0px 2px yellowgreen;
    }
    @media screen and (max-width : 850px){
        margin-top: 40px;
    }

}

`