import React from 'react'
import styled from '@emotion/styled'


interface Iprops{
    Avater: any
    text: string
}


const Imageholder =styled.div`
display: flex;
align-items: center;
gap: 40px;
`
const Imagehold =styled.div`

`

const Img =styled.img`
height: 100px;
width: 150px;
`
const Para =styled.p`
font-size: 16px;
font-weight: 100;
margin: 0;
`




export const PhotoIcon:React.FC<Iprops>= ({Avater, text}) => {
  return (
    
    <div>
         <Imageholder>
          <Imagehold>
            <Img src={Avater} />
            <Para>{text}</Para>
          </Imagehold>
        </Imageholder>
    </div>
  )
}
