
import styled from '@emotion/styled'

interface Iprops{
avater:any

}

const Image =styled.img`
    height: 100px;
    
`
import {FC} from 'react'

export const GetImag:FC<Iprops> = ({avater}) => {
  return (
    <>
        <Image src={avater}/>  
    </>
  )
}








