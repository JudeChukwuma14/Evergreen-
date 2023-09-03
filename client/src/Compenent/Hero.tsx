import {FC} from 'react'
import styled from '@emotion/styled'
import { Button } from './Button'
import Image from "../assets/image/img1.png"



const Container =styled.div`
display: flex;
justify-content: space-between;
padding-left: 120px;
padding-right: 120px;
align-items: center;

`
const Left =styled.div`
margin-right: 30px;

h4{
  font-size: 30px;
  margin-bottom: 10px;
  line-height: 40px;
}
`
const Para =styled.p`
width: 450px;
font-weight: 300;
`
const Right =styled.div``
const Img =styled.img``


export const Hero:FC = () => {
  return (
    <Container>
      <Left>
        <h4>Meet Evergreen, <br/> Segment's design system</h4>
        <Para>
          Evergreen is a React UI Framework for building abitious product on the web. Brought to you by Segment
        </Para>
        <Button />
      </Left>
      <Right>
        <Img src= {Image} />
      </Right>

    </Container>
  )
}
