import {FC} from 'react'
import styled from '@emotion/styled'
import Pic from "../assets/image/schedule-calendar-svgrepo-com.svg"
import Pic1 from "../assets/image/box.svg"




interface Iprops{
  title:string
  Text:string
  hr:string
}

const Containter =styled.section`
padding-left: 120px;
padding-right: 120px;
`
const WrapperHolder =styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Wrapper =styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 100px;
background-color: #FAFBFF;
`
const TextDiv =styled.div``
const H =styled.h3``
const Para =styled.p`
font-weight: 50;
`
const A = styled.a``
const HDiv =styled.div`
display: flex;
align-items: center;
gap: 10px;
`




import React from 'react'
import { GetImag } from './GetImage'



export const Get:React.FC <Iprops> = ({title,Text, hr}) => {
  return (
    <TextDiv>
    <H> {title} </H>
    <Para> {Text} </Para>
    <A> {hr} </A>
  </TextDiv>


  )
}
 



export const GetStarted:FC = () => {
  let title1:string = "Installation"
  let text1:string = "Learn how to install the evergreen-ui package"
  let a1:string = "Visit Installation page"


  let title2:string = "What's new"
  let text2:string = "Check out the latest changes and updates"
  let a2:string = "Read latest Update"
  
  return (
    <Containter>
        <h2>Get Started</h2>
      <WrapperHolder>
      <Wrapper>
      <HDiv>  
        <Get title ={title1}
             Text ={text1}
             hr={a1} 
             />
      </HDiv>
      <GetImag avater={Pic1} />
      </Wrapper>
      <Wrapper>
      <Get title ={title2}
             Text ={text2}
             hr={a2} />
      <GetImag avater={Pic} />
     
             
      </Wrapper>
      </WrapperHolder>
    </Containter>
  )
}
