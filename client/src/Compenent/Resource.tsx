import {FC} from 'react'
import styled from '@emotion/styled'
import Pic from "../assets/image/Figma.svg"
import pic from "../assets/image/sector.svg"






interface Iprops{
  avater: any
  write:string
}

const Contain =styled.section`
padding-left: 120px;
padding-right: 120px;

`
const Wrap =styled.div`

`
const Para =styled.p`
font-weight: 30;
`
const Goto =styled.a``
const BoxHolder= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Box =styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 20px;
height: 60px;
width: 45%;
border: 1px solid silver;
border-radius: 10px;
padding-left: 20px;
`
const Image =styled.img`
height: 30px;
`
const P =styled.h4``



import React from 'react'

export const ResourceProps:React.FC<Iprops> = ({avater, write}) => {
  return (
    <Box>
       <Image src={avater} />
            <P>{write}</P>
    </Box>
    
  )
}






export const Resource:FC = () => {
  return (
    <Contain>
      <h2>Resources</h2>
     <Wrap>
          <Para>
            A collection of tools, kits, plugins and guides to help simplify the creation process for our users.<Goto>See all resources</Goto>
          </Para>
          <BoxHolder>
            <ResourceProps avater={Pic} write='Evergreen Labrary' />
            <ResourceProps avater={pic} write='Segment Brand Hub' />
          </BoxHolder>
         
   
     </Wrap>
    </Contain>
  )
}
