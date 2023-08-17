import styled from '@emotion/styled'
import {FC} from 'react'


//Image-------------
import Pic from "../assets/image/Typography.png"
import Pic1 from "../assets/image/Colors.png"
import Pic2 from "../assets/image/Icons.png"
import Pic3 from "../assets/image/Button.png"
import Pic4 from "../assets/image/Badge & Pill.png"
import Pic5 from "../assets/image/Alert.png"
import Pic6 from "../assets/image/Empty State.png"
import Pic7 from "../assets/image/Table Layout.png"
import Pic8 from "../assets/image/Error Messages.png"
import Svg from  "../assets/image/Com.png"
import Svg1 from "../assets/image/Comp.png"


interface Iprops{
  title: string;
  text: string;
  goto: string
}


const Selection =styled.div`
background-color: #FFFFFF;
padding: 40px;
`
const AllWrapper =styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`
const Wrapper =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const WrapperHolder=styled.div`
display: flex;
align-items: center;
gap: 20px;
`
const H4 =styled.h4`
margin:0;
`

const P =styled.p`
width: 400px;
font-weight: 50;
`
const Link =styled.a`
cursor: pointer;
font-size: 17px;
font-weight: 50;
`

const PhotoHold =styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`




import React from 'react'
import { PhotoIcon } from './PhotoIcon'
import { GetI } from './GetI'


export const Design:React.FC<Iprops> = ({title, text, goto}) => {
  return (
  <div>
 <  H4>{title}</H4>
    <P>{text}</P>
    <Link>{goto}</Link>
  </div>
   
  )
}








export const DesignLanguage:FC = () => {
  let title1:string ="Foundations"
  let text1:string ="Evergreen contains a set of polished React components that work out of the box."
  let goto1:string ="Go to Foundations"

  let title2:string ="Components"
  let text2:string ="Evergreen components are built on top of a React UI Primitive for endless composability."
  let goto2:string ="Go to Components"

  let title3:string ="Patterns"
  let text3:string ="Evergreen features a UI design language for enterprise-grade web applications."
  let goto3:string ="Go to Patterns"
  return (
    <Selection>
      <h2>Design Language</h2>
      <AllWrapper>
          <Wrapper>
            <WrapperHolder>
            <GetI Photo={Svg1} />
            <Design  
                title ={title1}
                text ={text1}
                goto = {goto1}
                />
            </WrapperHolder>
            <PhotoHold>
                <PhotoIcon Avater={Pic} text='Typography' />
                <PhotoIcon Avater={Pic1} text='Colors' />
                <PhotoIcon Avater={Pic2} text='Icons' />
            </PhotoHold>
          </Wrapper>
          
          <Wrapper>
            <WrapperHolder>
            <GetI Photo={Svg} />
          

            <Design 
                title ={title2}
                text ={text2}
                goto = {goto2}
                />
            </WrapperHolder>
            <PhotoHold>
                <PhotoIcon Avater={Pic3} text='Buttons' />
                <PhotoIcon Avater={Pic4} text='Badge & Pill' />
                <PhotoIcon Avater={Pic5} text='Alert' />
            </PhotoHold>
            
          </Wrapper>

          <Wrapper>
            <WrapperHolder>
            <GetI Photo={Svg} />
            <Design 
                title ={title3}
                text ={text3}
                goto = {goto3}
                />
            </WrapperHolder>
            <PhotoHold>
                <PhotoIcon Avater={Pic6} text='Empty State' />
                <PhotoIcon Avater={Pic7} text='Table Layout' />
                <PhotoIcon Avater={Pic8} text='Error Message' />
            </PhotoHold>
          </Wrapper>
      
      </AllWrapper>
    </Selection>
  )
}
