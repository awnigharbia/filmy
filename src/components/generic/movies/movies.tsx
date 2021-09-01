import * as React from 'react'
import {useRef, FC} from 'react'
import * as Movies from './style'
import MovieCard from './MovieCard'
import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css'
import BounceLoader from 'react-spinners/BounceLoader'
import {Movie} from '../../home/slider/SliderModal'
import {useModal} from '../../../context/modal-context'

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
  const {handleOpen} = useModal()
  const panelRef = useRef<HTMLDivElement>(null)

  //Fix feature:
  // const {isBottom} = (loader && useBottom(panelRef)) || false

  // useEffect(() => {
  //   if (isBottom) props.fetchMore()
  // }, [isBottom])

  return (
    <>
      {movies?.map(
        ({
          id,
          poster_path,
          vote_average,
          release_date,
          genres,
          title,
          imdb,
        }) => (
          <MovieCard
            key={id}
            title={title}
            imdb={imdb}
            genres={genres}
            posterURL={poster_path}
            rating={vote_average}
            year={release_date}
            handleOpen={handleOpen}
          />
        ),
      )}
      ,
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
