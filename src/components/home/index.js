import React, {Component} from 'react'
import Slider from './slider'
import Center from './center'
import WelcomeSection from './wlcSection/'
import Footer from './footer/'

export default class Home extends Component {
  render() {
    const {movies, loading} = this.props

    return (
      <>
        <Slider movies={movies.slice(0, 9)} loading={loading} />
        <Center movies={movies.slice(10, 20)} loading={loading} />
        <WelcomeSection />
        <Footer />
      </>
    )
  }
}
