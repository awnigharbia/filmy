import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Home} from './home/Home'
import {MoviesList} from './movies/MoviesList'

import {MovieModal} from '@/context/MovieModalContext'
import {LatestMovies} from './latestMovies/LatestMovies'
import {Navbar} from './nav/Navbar'
import {GlobalStyle} from './globalStyle'
import {MovieModalView} from './generic/movieModal/MovieModalView'

export const App = () => {
  return (
    <>
      <GlobalStyle />
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
      </MovieModal>
    </>
  )
}
