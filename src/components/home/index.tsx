import * as React from 'react'
import {FC} from 'react'
import Slider from './slider/Slider'
import Center from './center/Center'
import WelcomeSection from './welcomeSection/WelcomeSection'
import Footer from './footer/Footer'
import {Movie} from './slider/SliderModal'

const Home: FC<{movies: Movie[]; loading: boolean; id: number}> = ({
  movies,
  loading,
  id,
}) => {
  return (
    <>
      <Slider movies={movies} loading={loading} />
      <Center movies={movies} loading={loading} id={id} />
      <WelcomeSection />
      <Footer />
    </>
  )
}

export default Home
