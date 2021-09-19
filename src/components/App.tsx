import * as React from 'react'
import {Navbar} from './nav/Navbar'
import {Route, Switch} from 'react-router-dom'
import {Home} from './home/Home'
import {MoviesList} from './movies/MoviesList'

import {MovieModal} from '@/context/MovieModalContext'
import {LatestMovies} from './latestMovies/LatestMovies'
import {MovieModalView} from './generic/movieModal/MovieModalView'

export const App = () => {
  return (
    <>
      <MovieModal>
        <Navbar />
        <MovieModalView />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/latest-movies" render={() => <LatestMovies />} />
          <Route
            path="/categories/:id"
            render={({match}) => <MoviesList genre={match.params.id} />}
          />
          <Route path="/about" component={() => <h1>About</h1>} />
        </Switch>
      </MovieModal>
    </>
  )
}
