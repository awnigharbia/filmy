import React, {Component} from 'react'
import {Wrapper} from './style'
import MoviesPanel from '../generic/movies/movies'

class MoviesList extends Component {
  state = {
    movies: [],
    loading: true,
    page: 1,
  }

  fetchMore = () => {
    this.props
      .fetchMovies(this.props.genre, this.state.page + 1, 'seeds')
      .then(res =>
        this.setState(prevState => ({
          movies: [...prevState.movies, ...res.data.MovieList],
          page: prevState.page + 1,
        })),
      )
  }

  componentDidUpdate(prevProps) {
    if (this.props.genre !== prevProps.genre) {
      this.fetchMovies(this.props.genre, 1)
    }
  }

  fetchMovies = (genre, page, sort = 'seeds') => {
    return this.props.fetchMovies(genre, page, sort).then(data =>
      this.setState(prevState => ({
        movies: data.data.MovieList,
        loading: false,
      })),
    )
  }

  componentDidMount() {
    this.fetchMovies(this.props.genre, 1, 'seeds')
  }

  render() {
    return (
      <Wrapper>
        <MoviesPanel
          loading={this.state.loading}
          movies={this.state.movies}
          fetchMore={this.fetchMore}
          loader={this.props.loader}
        />
      </Wrapper>
    )
  }
}

export default MoviesList
