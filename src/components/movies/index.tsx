import * as React from 'react'
import { FC, useEffect } from 'react'
import MoviesPanel from '../generic/movies/movies'
import { useSetState } from '../hooks/useSetState';


interface Props {
  genre: [];
  loader: boolean;
  fetchMoviesByGenre(genre: [], page: number, sort: string): Promise<any>
}

const MoviesList: FC<Props> = ({ fetchMoviesByGenre, genre, loader }) => {
  const [state, setState] = useSetState({
    movies: [],
    loading: true,
    page: 1
  })
  const fetchMore = () =>
    fetchMoviesByGenre(genre, state.page + 1, 'seeds')
      .then(res =>
        setState({
          movies: [...state.movies, ...res.data.MovieList],
          page: state.page + 1,
        }),
      )


  const fetchMoviesLocal = (genre: [], page: number, sort = 'seeds') =>
    fetchMoviesByGenre(genre, page, sort).then(data =>
      setState({
        movies: data.data.MovieList,
        loading: false,
      })
    )


  useEffect(() => {
    fetchMoviesLocal(genre, 1, 'seeds')
  },[genre])

  return (
    <>
     <MoviesPanel
        loading={state.loading}
        movies={state.movies}
        loader={loader}
      />
    </>
  )
}



export default MoviesList
