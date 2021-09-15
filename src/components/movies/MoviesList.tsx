import {useMoviesWithGenre} from '@/api/movieAPI'
import * as React from 'react'
import {FC} from 'react'
import {MoviesPanel} from '../generic/movies/MoviesPanel'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import * as Movies from '@/components/generic/movies/style'
import {BounceLoader} from 'react-spinners'

interface Props {
  genre: string
}

export const MoviesList: FC<Props> = ({genre}) => {
  const {movies, fetchNextPage, hasNextPage, isFirstLoad} = useMoviesWithGenre(
    genre,
  )

  const panelRef = React.useRef<HTMLDivElement>(null)

  useIntersectionObserver({
    target: panelRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  })

  return (
    <>
      <MoviesPanel moviePages={movies} isLoading={isFirstLoad} />
      <Movies.Loader ref={panelRef} style={{width: '100%', height: '100px'}}>
        <BounceLoader color="#602f75" />
      </Movies.Loader>
    </>
  )
}
