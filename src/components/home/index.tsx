import * as React from 'react'
import {FC} from 'react'
import Center from './center/Center'
import WelcomeSection from './welcomeSection/WelcomeSection'
import Footer from './footer/Footer'
import SliderComponent from './slider/Slider'

const Home: FC<{movies: Movie[]; loading: boolean; id: number}> = ({
  movies,
  loading,
  id,
}) => {
  return (
    <>
      {loading ? null : <SliderComponent movies={movies} />}
      <Center movies={movies} loading={loading} id={id} />
      <WelcomeSection />
      <Footer />
    </>
  )
}

export default Home
