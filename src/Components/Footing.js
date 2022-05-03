import React from 'react'
import styled from 'styled-components'

function Footing() {
  return (
    <>
    <Frame>
        <Subframe>
            <p className='p1'>This Demo website is an intellectual property of Azubine Uzondu Promise</p>
            <p className='p2'>All rights reserved  ©2022</p>
            <p className='p3'>Contact: Uzonduazubine@gmail.com for more info</p>

        </Subframe>
    </Frame>
    </>
  )
}

export default Footing

const Frame=styled.div`
width:100%;

height:70px;
`
const Subframe=styled.div`
width:100%;
height:60px;
background-color:silver;
font-family:timesnew roman;

.p2{margin-top:-20px;
    color:black;

}
.p1{margin-top:10px;
    color:black;

}
.p3{margin-top:-20px;
    color:black;

}

@media screen and (max-width:800px){
    font-size:9.5pt;
    .p2{margin-top:-20px;
        color:black;
    
    }
    .p1{margin-top:10px;
        color:black;
        font-size:pt;
    
    }
    .p3{margin-top:-20px;
        color:black;
    
    }
}


`