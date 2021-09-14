import React from 'react'
import {useRef, FC} from 'react'
import * as Movies from '@/components/generic/movies/style'
import BounceLoader from 'react-spinners/BounceLoader'
import {MoviesPanel} from '../generic/movies/MoviesPanel'
import {useLatestMovies} from '@/api/movie_api'
import useIntersectionObserver from './../hooks/useIntersectionObserver'

export const LatestMovies = () => {
  const {movies, fetchNextPage, hasNextPage, isLoading} = useLatestMovies(
    'infiniteScroll',
  )
  const panelRef = useRef<any>()

  useIntersectionObserver({
    target: panelRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  })

  return (
    <>
      <MoviesPanel moviePages={movies} isLoading={isLoading} />
      <Movies.Loader ref={panelRef} style={{width: '100%', height: '100px'}}>
        <BounceLoader color="#602f75" />
      </Movies.Loader>
    </>
  )
}
