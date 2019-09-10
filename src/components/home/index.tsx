import * as React from 'react'
import {FC} from 'react'
import Slider from './slider'
import Center from './center'
import WelcomeSection from './wlcSection'
import Footer from './footer'
import {Movie} from './slider/sliderModal'

const Home: FC<{movies: Movie[]; loading: boolean; id: number}> = ({
  movies,
  loading,
  id,
}) => {
  return (
    <>
      <Slider movies={movies.slice(0, 9)} loading={loading} />
      <Center movies={movies.slice(10, 20)} loading={loading} id={id} />
      <WelcomeSection />
      <Footer />
    </>
  )
}

export default Home
