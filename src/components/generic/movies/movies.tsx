import * as React from 'react'
import {useRef, useEffect, FC} from 'react'
import * as Movies from './style'
import MovieCard from './movieCard'
import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css'
import {ModalProvider} from '../../App'
import useBottom from '../../hooks/useBottom'
import BounceLoader from 'react-spinners/BounceLoader'
import {Movie} from '../../home/slider/sliderModal'

interface Props {
  movies: Movie[]
  loader: boolean
  loading: boolean
}

const placeholderStyle = {
  width: '200px',
  height: '346px',
  marginTop: '10px',
  borderRadius: '5px',
}

const MoviesPanel: FC<Props> = ({movies, loader, loading}) => {
  return (
    <Movies.Movies>
      {loading ? renderLoading(loading) : RenderMovies(movies, loader)}
    </Movies.Movies>
  )
}

const RenderMovies = (movies: Movie[], loader: boolean) => {
  const panelRef = useRef<HTMLDivElement>(null)

  //Fix feature:
  // const {isBottom} = (loader && useBottom(panelRef)) || false

  // useEffect(() => {
  //   if (isBottom) props.fetchMore()
  // }, [isBottom])

  return (
    <>
      {movies !== undefined &&
        movies.map(({poster_med, rating, year, genres, title, imdb}, key) => (
          <ModalProvider.Consumer key={key}>
            {({handleOpen}) => {
              return (
                <MovieCard
                  title={title}
                  imdb={imdb}
                  genres={genres}
                  posterMed={poster_med}
                  rating={rating}
                  year={year}
                  handleOpen={handleOpen}
                />
              )
            }}
          </ModalProvider.Consumer>
        ))}
      {loader && (
        <Movies.Loader ref={panelRef} style={{width: '100%', height: '100px'}}>
          <BounceLoader color="#602f75" />
        </Movies.Loader>
      )}
    </>
  )
}

const renderLoading = (loading: boolean) =>
  Array.from(new Array(20), (v, ii) => (
    <ReactPlaceholder
      key={ii}
      type="rect"
      ready={!loading}
      color="#E0E0E0"
      showLoadingAnimation
      style={placeholderStyle}
    >
      <></>
    </ReactPlaceholder>
  ))

export default MoviesPanel