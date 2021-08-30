import * as React from 'react'
import {FC} from 'react'
import Slider from './slider/slider'
import Center from './center/center'
import WelcomeSection from './welcomeSection/welcomeSection'
import Footer from './footer/footer'
import {Movie} from './slider/sliderModal'

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
