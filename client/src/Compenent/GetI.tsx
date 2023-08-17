import styled from '@emotion/styled'

interface Iprops{
    Photo:any
    }
    
  const Imag =styled.img`
    height: 50px;
  `
  import React from 'react'
  
  export const GetI:React.FC<Iprops> = ({Photo}) => {
    return (
      <>
      <Imag src={Photo} />
      </>
    )
  }
  