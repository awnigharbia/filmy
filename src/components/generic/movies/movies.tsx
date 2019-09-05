import * as React from 'react'
import { useRef, useEffect, FC } from 'react'
import * as Movies from './style'
import MovieCard from './movieCard'
import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css'
import { ModalProvider } from '../../App'
import useBottom from '../../hooks/useBottom'
import BounceLoader from 'react-spinners/BounceLoader'
import { Movie } from '../../home/slider/sliderModal'

interface Props {
  movies: Movie[];
  loader: boolean;
  loading: boolean;
}

const MoviesPanel: FC<Props> = ({ movies, loader, loading }) => {

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


  const RenderMovies = () => {
    const panelRef = useRef<HTMLDivElement>(null)
    // const {isBottom} = (loader && useBottom(panelRef)) || false

    // useEffect(() => {
    //   if (isBottom) props.fetchMore()
    // }, [isBottom])

    return (
      <>
        {movies !== undefined &&
          movies.map((item, key) => (
            <ModalProvider.Consumer key={key}>
              {({handleOpen}) => {
                return (
                  <MovieCard {...item} handleOpen={handleOpen} />
                )
              }}
            </ModalProvider.Consumer>
          ))}
        {loader && (
          <Movies.loader
            ref={panelRef}
            style={{ width: '100%', height: '100px' }}
          >
            <BounceLoader color="#602f75" />
          </Movies.loader>
        )}
      </>
    )
  }



  return (
    <Movies.Movies>
      {loading ? renderLoading(loading) : RenderMovies()}
    </Movies.Movies>
  )
}

const placeholderStyle = {
  width: '200px',
  height: '346px',
  marginTop: '10px',
  borderRadius: '5px',
}

export default MoviesPanel
