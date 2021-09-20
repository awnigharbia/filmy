import React from 'react'
import {useRef} from 'react'
import * as Movies from '@/components/generic/movies/style'
import BounceLoader from 'react-spinners/BounceLoader'
import {MoviesPanel} from '../generic/movies/MoviesPanel'
import {useLatestMovies} from '@/api/movieAPI'
import useIntersectionObserver from './../hooks/useIntersectionObserver'

export const LatestMovies = (): JSX.Element => {
  const {
    movies,
    fetchNextPage,
    hasNextPage,
    isFirstLoad,
    isError,
  } = useLatestMovies('infiniteScroll')
  const panelRef = useRef<HTMLDivElement>(null)

  useIntersectionObserver({
    target: panelRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  })

  return (
    <>
      <MoviesPanel
        moviePages={movies}
        isLoading={isFirstLoad}
        isError={isError}
      />
      <Movies.Loader ref={panelRef} style={{width: '100%', height: '100px'}}>
        <BounceLoader color="#602f75" />
      </Movies.Loader>
    </>
  )
}
