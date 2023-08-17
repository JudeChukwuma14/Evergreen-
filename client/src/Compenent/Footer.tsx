import {FC} from 'react'
import styled from '@emotion/styled'
import Segment from "../assets/image/segment-logo.svg"


const Foot =styled.footer`

background-color: #FFFFFF;

`
const Foothold =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 40px;
`
const AllFoot =styled.div`
display: flex;
gap: 40px;
align-items: center;
`

const Img =styled.img`
height: 30px;
`
const Word =styled.div`
display: flex;
gap: 40px;
align-items: center;
`
const Pc =styled.p`
margin: 0;
font-weight:20;
`
const PV =styled.p`
margin: 0;
font-weight:20;
`


export const Footer:FC = () => {
  return (
    <Foot>
      <Foothold>
        <AllFoot>
        <Img src={Segment} />
        <PV>© 2023, Segment.io, Inc.</PV>
        </AllFoot>
        <Word>
        <Pc>We're hiring! </Pc> 
        <PV>Website Data Collection </PV>
        </Word>
      </Foothold>
    </Foot>
  )
}
