import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import pik1 from '../Images/water-treat.jpg';
import pik2 from '../Images/watering-test.jpg';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {RiInstagramFill} from 'react-icons/ri';
import {deebee} from './Basse';
import {collection, addDoc, doc,Timestamp, query} from 'firebase/firestore';





function Contact() {

  const [Name, setName] = useState('');
  const [Phonenumber, setPhonenumber] = useState(0);
  const [Email, setEmail] = useState("");
  const [Newmessage, setNewmessage] = useState("");
  const [newtime, setNewTime] = useState(Timestamp.now().toDate())
  const CollectionsRef = collection(deebee, "appointments");

  const Bookappointment = async () => {
    await addDoc(CollectionsRef, {name:Name, phone:Phonenumber, mail:Email, message:Newmessage,time:newtime})
    
}

  return (
   <> 
   <Alphaprime>
     <Betaprime>
       <h3>Contact Us</h3>
       <h1>How Can We Help You?</h1>
       <h5>We are a member of Wellness & Healthy Living company. We specialize in Water Testing, 
         Treatment/Installations,Indoor air purification and maintenance/repairs.
         <br/>Give us a call today to learn how simple our process truly is!</h5>
         <a className='a1' href='tel:+2348035820672'>Call us</a>
         <br/>
         <a className='a2' href="https://paystack.shop/wellness-store" target='_blank'>Visit Our Online Store</a>
     </Betaprime>
     <Cetaprime>
       <p>By planning ahead you can save yourself 
         from chronic diseases through years of consumption 
         of  unhealthy water and indoor air pollution.</p>
       <h2>Do You Need Water Test/Treatment?</h2>
       <h3>Call us now: +2348035820672 <br/>or visit <a href="https://wellnessacademygroup.com"
        target="_blank">wellnessacademygroup.com</a></h3>
        <Cetaimg>
          <img className='img1' src={pik1}/>
          <img className='img2' src={pik2}/>
        </Cetaimg>
      

     </Cetaprime>

     <Deltaprime>
       <h1>Your health and well-being and that of your future 
         generation depends on the decisions of today!</h1>
       <h2>We’re on a mission to help build long-lasting brands 
         and relationships that transcends generations</h2><br/>
       <a className='ref1' href="mailto:info@wellnessacademygroup.com?subject=Inquiry" target='_blank'>Send us a Mail</a>
       <a className='ref2' href="https://paystack.shop/wellness-store" target='_blank'>Visit our online store</a>
     </Deltaprime>
     <Socialprime>
       <Socileft>
       <h4>You can also connect with us via our Social Media Handles<br/> Just click on any of the Social Icons bellow!</h4>
       <a  href='https://facebook.com/SafeHealthyEnvironment/' target="_blank"><FaFacebook/> </a>
       <a href='https://instagram.com/safehealthyenvironment/' target='_blank'><RiInstagramFill/></a>
       <a href='https://mobile.twitter.com/safehealthyevt' target='_blank'><FaTwitter/></a>

       </Socileft>
       
       <Sociright>
        
         <div className='divA'>
         <form className='form1'>

           <input onChange={((event) => {
            setName(event.target.value)
        })}type="text" id='name' placeholder='Name'></input>

           <input onChange={((event) => {
            setPhonenumber(event.target.value)
        })}type="text" id='phone' placeholder='Phone Number'></input>

           <input onChange={((event) => {
            setEmail(event.target.value)
        })} type="text" id='mail' placeholder='Email'></input>
         </form>
         </div>

         <div className='divB'>
           <form className='form2'>
         <input onChange={((event) => {
            setNewmessage(event.target.value)
        })} type="text" id='message' placeholder='Type your message'></input>


           <input onClick={(() => {
             Bookappointment();  
        })}type='submit'id='send' placeholder='Send Request'></input>
           </form>
           
         </div>
       </Sociright>
     </Socialprime>
   </Alphaprime>
   </>
  )
}

export default Contact

const Alphaprime=styled.div`
color:black;
`

const Betaprime=styled.div`
height: 500px;
width: 100%;
background-color: whitesmoke;
display:flex;
flex-direction: column;
align-items: center;

  h3{
    font-family: monotype corsiva;
    font-size: 30pt;
  }
  h1{
    font-family:timesnew roman;
    font-size: 30pt;
    color:yellowgreen;
  }
  h5{
    font-family:timesnew roman;
    font-size:11pt;
    width: 380px;
    height: 120px;
    font-weight:bold;
  }
  .a1{
      padding: 5px 20px;
      background-color:yellowgreen;
      text-decoration:none;
      border-radius:20px;
      color:white;
  
  :hover{
      background-color:transparent;
      cursor:pointer;
      color:yellowgreen;
      border-color:yellowgreen;
      font-weight:bold;
      font-size: 12pt;
      box-shadow: 0px 0px 0px 3px yellowgreen;}

  }
  .a2{
    padding: 5px 20px;
    background-color:yellowgreen;
    text-decoration:none;
    border-radius:20px;
    color:white;

:hover{
    background-color:transparent;
    cursor:pointer;
    color:yellowgreen;
    border-color:yellowgreen;
    font-weight:bold;
    font-size: 12pt;
    box-shadow: 0px 0px 0px 3px yellowgreen;;
  }

  @media screen and (max-width:800px){
    h5{
      color:red;
    }

  }
  
  

  

}
`
const Cetaprime=styled.div`
width: 100%;
height: 650px;
background-color:white;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

P{
  font-size: 15pt;
  width:600px;
  text-align:center;
  font-weight:bold;
  
  
}
h2{
  font-weight:bold;
  font-family:monotype corsiva;
  font-size:25pt;

}
h3{
  font-family:timesnew roman;
  font-size:15pt;
}

@media screen and (max-width:800px){
  height:500px;

  p{width:350px;
  font-size:11pt;
  text-align:justify;
}
}

`
const Cetaimg=styled.div`
display:flex;

width: 700px%;
img{
  height:300px;
  width:400px;
  margin: 20px;
  border-radius:20px;
  
}
@media screen and (max-width:800px){
  
  img{
    height:200px;
    width:170px;
    margin:5px;
  }
}
`
const Deltaprime = styled.div`
height: 400px;
width:100%;
background-color:whitesmoke;

 h1{
   width: 600px;
   font-size: 25pt;
   margin-left:500px;
   font-weight:bold;
   font-family:monotype corsiva;
 }
 h2{
  width: 700px;
  font-size: 25pt;
  margin-left:450px;
  font-family:timesnew roman;
}
.ref1{
        padding: 10px 20px;
        background-color:yellowgreen;
        text-decoration:none;
        border-radius:20px;
        color:white;
        
    
    :hover{
        background-color:white;
        cursor:pointer;
        color:yellowgreen;
        box-shadow: 0px 0px 0px 2px yellowgreen;
        font-weight:bold;
        font-size: 14pt;
        border-width:5px; }
}
.ref2{
  padding: 10px 15px;
  text-decoration:none;
  border-radius:20px;
  color:yellowgreen;
  margin-left: 20px;
  box-shadow: 0px 0px 0px 2px yellowgreen;

  :hover{
    background-color:yellowgreen;
    color:white;
    font-weight:bold;
    font-size:14pt;
  }
}


  @media screen and (max-width:800px){
    height:350px;
    margin-top:20px;
    h1{
      margin-top:20px;
      width: 300px;
      font-size: 17pt;
      margin-left:40px;
      font-weight:bold;
      font-family:monotype corsiva;
    }
    h2{
     width: 300px;
     font-size: 15pt;
     margin-left:50px;
     font-family:timesnew roman;
     margin-top:20px;
   }
   .ref1{
           padding: 10px 20px;
           background-color:yellowgreen;
           text-decoration:none;
           border-radius:20px;
           color:white;
           box-shadow: 0px 0px 0px 2px yellowgreen;
  }
  .ref2{
    padding: 10px 15px;
    text-decoration:none;
    border-radius:20px;
    color:yellowgreen;
    margin-left: 20px;
    box-shadow: 0px 0px 0px 2px yellowgreen;
  }
`
const Socialprime=styled.div`
height: 700px;
width: 100%;
background-color:;
display:flex;
justify-content:space-between;

@media screen and (max-width:800px){
  flex-direction:column;
  align-items:center
  
}


`
const Socileft=styled.div`
background-color:;
height: 350px;
width: 750px;
margin-top: 20px;
margin-left:20px;

a{
  height:1500px;
  width:150px;
  color:black;
  font-size: 40pt;
  margin: 50px;
  
}
h4{
  font-family:monotype corsiva;
  font-size:28pt;
  font-weight:bold;
  
}

img{
height:100px;
width: 100px;
}
@media screen and (max-width:800px){
  height:200px;
  width:370px;
  margin-right: 17px;

  h4{
    font-size:12pt;
    margin-top: 20px;
  }
  img{
    margin-top: 20px;
    height:50px;
    width: 50px;
    margin:10px;
    border-radius:50%;
  }
  a{
    margin:10px;
  }

}
`
const Sociright=styled.div`
background-color:whitesmoke;
height:350px;
width:600px;
display:flex;
box-shadow: 0px 0px 0px 2px green;
margin: 20px;
#name{
  height:50px;
  width: 300px;
  border-radius:10px;
  box-shadow: 0px 0px 0px 1px yellowgreen;
  margin-top: 10px;
  
}

#phone{
  height:50px;
  width: 300px;
  border-radius:10px;
  box-shadow: 0px 0px 0px 1px yellowgreen;
  margin-top:20px;
}
#mail{
  height:50px;
  width: 300px;
  border-radius:10px;
  box-shadow: 0px 0px 0px 1px yellowgreen;
  margin-top:20px;
}
#message{
  height: 200px;
  width:250px;
  border-radius:20px;
  margin-top:5px;
  margin-left:5px;
}
#send{
  height:50px;
  width: 250px;
  border-radius:20px;
  box-shadow: 0px 0px 0px 1px yellowgreen;
  background-color:yellowgreen;
  color:white;
  margin-top: 10px;
  margin-left:5px;
  :hover{background-color:transparent;
    box-shadow: 0px 0px 0px 2px yellowgreen;
  }

}
.form1{
  display:flex;
  flex-direction:column;
}
.form2{
  display:flex;
  flex-direction:column;
}
.divA{
  margin-left:20px;
}

@media screen and (max-width:800px){
  height:400px;
  width:350px;
  flex-direction:column;
  margin-top: -50px;
  align-items:center;
  #message{
    height: 100px;
    width:300px;
    margin-top:10px;
  }
  .divA{
    margin-left:-10px;
  }
  .divB{
    margin-left:-10px;
  }
  #send{
    margin-left:30px;
  
}
`