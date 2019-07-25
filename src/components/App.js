import React, {Component, createContext} from 'react'
import Navbar from 'nav/'
import {Route, Switch} from 'react-router-dom'
import Home from 'home'
import MoviesList from 'movies/'
import MovieModal from 'generic/movieModal/'
import API from 'api/movie'

// constant
const url = 'https://api.apiumando.info/'

const ModalProvider = createContext('modal')

class App extends Component {
  state = {
    open: false,
    loading: true,
    movies: [],
    page: 1,
    data: {},
  }

  handleOpen = imdb => {
    if (typeof imdb === 'object')
      this.setState(prevState => ({open: !prevState.open}))

    if (typeof imdb === 'string') {
      API.movies(url)
        .getDetails(imdb)
        .then(data => {
          this.setState({
            open: !this.state.open,
            data: data.data,
          })
        })
    }
  }

  fetchMovies = (sort, page) => {
    return API.movies(url).getByPage(sort, page)
  }

  fetchMoviesByGenre = (genre, page, sort) => {
    return API.movies(url).getByGenre(genre, page, sort)
  }

  componentDidMount() {
    this.fetchMovies('seeds', 1).then(data =>
      this.setState(prevState => ({
        movies: data.data.MovieList,
        loading: !prevState.loading,
      })),
    )
  }

  render() {
    return (
      <>
        <Navbar open={this.handleOpen} />
        <ModalProvider.Provider value={this.handleOpen}>
          <MovieModal
            open={this.state.open}
            handleOpen={this.handleOpen}
            data={this.state.data}
          />
          <Switch>
            <Route exact path="/" render={() => <Home {...this.state} />} />
            <Route
              path="/latest-movies"
              render={() => (
                <MoviesList
                  {...this.state}
                  topic="seeds"
                  fetchMovies={this.fetchMovies}
                  loader={true}
                />
              )}
            />
            <Route
              path="/categories/:cat"
              render={({match}) => (
                <MoviesList
                  genre={match.params.cat}
                  fetchMovies={this.fetchMoviesByGenre}
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
}

export {ModalProvider, App}
