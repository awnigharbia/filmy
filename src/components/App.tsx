import * as React from 'react'
import {Navbar} from './nav/Navbar'
import {Route, Switch} from 'react-router-dom'
import {Home} from './home/Home'
import {MoviesList} from './movies/MoviesList'

import {Modal} from 'src/context/modal-context'
import {LatestMovies} from './latestMovies/LatestMovies'
import {MovieModal} from './generic/movieModal/ModalContent'

export const App = () => {
  return (
    <>
      <Modal>
        <Navbar />
        <MovieModal />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/latest-movies" render={() => <LatestMovies />} />
          <Route
            path="/categories/:id"
            render={({match}) => <MoviesList genre={match.params.id} />}
          />
          <Route path="/about" component={() => <h1>About</h1>} />
        </Switch>
      </Modal>
    </>
  )
}
