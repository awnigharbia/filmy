import * as React from 'react'
import {FC} from 'react'
import * as Movies from './style'
import {MovieCard} from './MovieCard'
import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css'
import {InfiniteData} from 'react-query/types/core/types'

interface Props {
  moviePages: InfiniteData<any> | undefined
  isLoading: boolean
}

const placeholderStyle = {
  width: '200px',
  height: '346px',
  marginTop: '10px',
  borderRadius: '5px',
}

export const MoviesPanel: FC<Props> = ({moviePages, isLoading}) => {
  return (
    <Movies.Movies>
      {isLoading ? RenderLoading(isLoading) : RenderMovies(moviePages)}
    </Movies.Movies>
  )
}

const RenderMovies = (moviePages: InfiniteData<any> | undefined) => {
  //Fix feature:
  // const {isBottom} = (loader && useBottom(panelRef)) || false

  // useEffect(() => {
  //   if (isBottom) props.fetchMore()
  // }, [isBottom])

  return (
    <>
      {moviePages?.pages.map(page => {
        return (
          <React.Fragment key={page.page}>
            {page?.results?.map((movie: Movie) => {
              return <MovieCard key={movie.id} {...movie} />
            })}
          </React.Fragment>
        )
      })}
    </>
  )
}

const RenderLoading = (loading: boolean) =>
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
