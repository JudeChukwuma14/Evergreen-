

import {FC} from 'react'
import { Header } from './Compenent/Header'
import { LandingPage } from './Compenent/LandingPage'
import { Footer } from './Compenent/Footer'
import { GlobalStyle } from './Compenent/GlobalStyle'

export const App:FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <LandingPage />
      <Footer />



    </div>
  )
}
