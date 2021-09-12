import * as React from 'react'
import {FC} from 'react'
import {Center} from './center/Center'
import {WelcomeSection} from './welcomeSection/WelcomeSection'
import {Footer} from './footer/Footer'
import {SliderComponent} from './slider/slider'

export const Home: FC<{movies: Movie[]; loading: boolean; id: number}> = ({
  movies,
  loading,
  id,
}) => {
  return (
    <>
      {!loading && <SliderComponent movies={movies} />}
      <Center id={id} />
      <WelcomeSection />
      <Footer />
    </>
  )
}
