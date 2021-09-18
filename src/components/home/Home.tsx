import * as React from 'react'
import {FC} from 'react'
import {Center} from './center/Center'
import {WelcomeSection} from './welcomeSection/WelcomeSection'
import {Footer} from './footer/Footer'
import {SliderComponent} from './slider/Slider'

export const Home: FC = () => {
  return (
    <>
      <SliderComponent />
      <Center />
      <WelcomeSection />
      <Footer />
    </>
  )
}
