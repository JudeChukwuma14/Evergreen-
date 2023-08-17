
import {FC} from 'react'
import { Hero } from './Hero'
import { CoreValues } from './CoreValues'
import { DesignLanguage } from './DesignLanguage'
import { Resource } from './Resource'
import { GetStarted } from './GetStarted'


export const LandingPage:FC = () => {
  return (
    <div>
      <Hero   />
      <CoreValues />
      <GetStarted />
      <DesignLanguage />
      <Resource />
    </div>
  )
}
