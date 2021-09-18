import * as React from 'react'
import {FC} from 'react'
import * as Movies from './style'
import {MovieCard} from './MovieCard'
import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css'
import {InfiniteData} from 'react-query/types/core/types'
import {MoviesResult} from '@/api/movieAPI'

interface Props {
  moviePages: InfiniteData<MoviesResult> | undefined
  isLoading: boolean
  isError?: boolean
}

const placeholderStyle = {
  width: '200px',
  height: '346px',
  marginTop: '10px',
  borderRadius: '5px',
}

export const MoviesPanel: FC<Props> = ({
  moviePages,
  isLoading,
  isError = false,
}) => {
  if (isError) {
    return <div>Oops. Something went wrong</div>
  }

  return (
    <Movies.Movies>
      {isLoading ? (
        <RenderLoading isLoading={isLoading} />
      ) : (
        <MoviesPagesList moviePages={moviePages} />
      )}
    </Movies.Movies>
  )
}

const MoviesPagesList = ({
  moviePages,
}: {
  moviePages: InfiniteData<MoviesResult> | undefined
}) => {
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

const RenderLoading = ({isLoading}: {isLoading: boolean}) => (
  <>
    {Array.from(new Array(20), (v, ii) => (
      <ReactPlaceholder
        key={ii}
        type="rect"
        ready={!isLoading}
        color="#E0E0E0"
        showLoadingAnimation
        style={placeholderStyle}
        children={null}
      />
    ))}
  </>
)
