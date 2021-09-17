import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Home} from './home/Home'
import {MoviesList} from './movies/MoviesList'

import {Modal} from 'src/context/modal-context'
import {LatestMovies} from './latestMovies/LatestMovies'
import {MovieModal} from './generic/movieModal/modalContent'
import {Navbar} from './nav/Navbar'
import {GlobalStyle} from './GlobalStyle'

export const App = () => {
  return (
    <>
      <GlobalStyle />
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
          <Route
            path="/about"
            component={() => (
              <h1
                style={{
                  background: 'var(--colors-primary)',
                  height: '100vh',
                  margin: '0px',
                  color: 'var(--colors-text)',
                  transition: 'color 0.3s ease, background 0.3s ease',
                }}
              >
                About
              </h1>
            )}
          />
        </Switch>
      </Modal>
    </>
  )
}
