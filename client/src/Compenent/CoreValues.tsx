import {FC} from 'react'
import styled from "@emotion/styled"
import {AiFillBulb} from "react-icons/ai"
import {TiSpanner} from "react-icons/ti"
import {ImOffice} from "react-icons/im"



interface Iprops{
  icon:any;
  title:string;
  text:string;
}

const Contianter =styled.section`
background-color: #FFFFFF;
padding-left: 120px;
padding-right: 120px;
`
const Wrapper =styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const H2 =styled.h2``

const Box =styled.div``

const IconBox =styled.div`
height: 50px;
width: 50px;
background-color: #ebf0ff;
color: #386aff;
display: flex;
justify-content: center;
align-items: center;
border-radius:50%;
font-size: 20px;
`
const P =styled.p`
font-weight: 20px;
  width: 300px;
`


import React from 'react'

export const CoreCard:React.FC<Iprops> = ({icon, title, text}) => {
  return (
    <Box>
      <IconBox>{icon}</IconBox>
      <H2>{title}</H2>
      <P>{text}</P>
    </Box>
  )
}


export const CoreValues:FC = () => {
  let title:string = "Works out of the box"
  let text:string = 'Evergreen contains a set of polished React components that work out of the box.'

  let title1:string = "Flexible and composable" 
  let text1:string = 'Evergreen components are built on top of a React UI Primitive for endless composability.'
  
  let title2:string = "Enterprise-grade"
  let text2:string = 'Evergreen features a UI design language for enterprise-grade web applications'
  return (
   <Contianter>
    <h2>CoreValues</h2>
    <Wrapper>
      <CoreCard 
      icon={<AiFillBulb />}
      title={title}
      text={text} />

<CoreCard 
      icon={<TiSpanner />}
      title={title1}
      text={text1} />

<CoreCard 
      icon={<ImOffice />}
      title={title2}
      text={text2} />
    </Wrapper>

   </Contianter>
    
  )
}
