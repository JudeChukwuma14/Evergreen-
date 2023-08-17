import React from 'react'
import {Global, css} from"@emotion/react"

export const GlobalStyle:React.FC = () => {
  return (
    <div>
        <Global 
        styles={css`
            @font-face {
  font-family: "CustomFont";
  src: url("../font/Roboto/Roboto-Black.ttf");
  src: url("../font/Roboto/Roboto-Bold.ttf");
  src: url("../font/Roboto/Roboto-Medium.ttf");
  src: url("../font/Roboto/Roboto-Regular.ttf");
}

body{
  font-family: CustomFont;
  font-weight:700;
  margin: 0;
  padding: 0;
  min-height: 100vh;

}
        `}

/>
    </div>
  )
}
