import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Home} from './home/Home'
import {MoviesList} from './movies/MoviesList'

import {Modal} from 'src/context/modal-context'
import {LatestMovies} from './latestMovies/LatestMovies'
import {MovieModal} from './generic/movieModal/modalContent'
import {Navbar} from './nav/Navbar'
import {GlobalStyle} from './globalStyle'

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
                  transition:
                    'color 0.2s ease-in-out, background 0.2s ease-in-out',
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
