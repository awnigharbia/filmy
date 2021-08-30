import * as React from 'react'
import {useEffect, createContext} from 'react'
import {useSetState} from './hooks/useSetState'
import Navbar from './nav/Navbar'
import {Route, Switch} from 'react-router-dom'
import Home from './home'
import MoviesList from './movies/MoviesList'
import MovieModal from './generic/movieModal/MovieModal'
import API from '../api/movie'
import {url} from '../constants'

type Modal = {
  handleOpen(imdb: string): void
}

const ModalProvider = createContext<Modal>({
  handleOpen: () => undefined,
})

const App = () => {
  const [state, setState] = useSetState({
    open: false,
    loading: true,
    movies: [],
    page: 1,
    data: {},
    imdb: '',
  })

  const handleClose = () => setState({open: !state.open, imdb: ''})

  const handleOpen = (imdb: string) => {
    if (typeof imdb === 'string') {
      setState({imdb: imdb})
    }
  }

  const fetchMovies = (sort: string, page: number) =>
    API.movies(url).getByPage(sort, page)

  const fetchMoviesByGenre = (genre: [], page: number, sort: string) =>
    API.movies(url).getByGenre(genre, page, sort)

  useEffect(() => {
    if (state.imdb !== '')
      API.movies(url)
        .getDetails(state.imdb)
        .then(data => {
          setState({
            open: !state.open,
            data: data.data,
          })
        })

    if (state.movies.length === 0)
      fetchMovies('seeds', 1).then(data =>
        setState({
          movies: data,
          loading: !state.loading,
        }),
      )
  }, [state.imdb, state.movies])

  return (
    <>
      <Navbar openModal={handleOpen} />
      <ModalProvider.Provider value={{handleOpen}}>
        <MovieModal
          open={state.open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          data={state.data}
        />
        <Switch>
          <Route exact path="/" render={() => <Home {...state} />} />
          <Route
            path="/latest-movies"
            render={() => (
              <MoviesList
                {...state}
                topic="seeds"
                fetchMoviesByGenre={fetchMovies}
                loader={true}
              />
            )}
          />
          <Route
            path="/categories/:cat"
            render={({match}) => (
              <MoviesList
                genre={match.params.cat}
                fetchMoviesByGenre={fetchMoviesByGenre}
                loader={true}
              />
            )}
          />
          <Route path="/about" component={() => <h1>About</h1>} />
        </Switch>
      </ModalProvider.Provider>
    </>
  )
}

export {ModalProvider, App}
