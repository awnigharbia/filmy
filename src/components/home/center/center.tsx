import * as React from 'react'
import {FC} from 'react'
import {Wrapper} from './style'
import {TopHeader} from './TopHeader'
import {MoviesPanel} from '@/components/generic/movies/MoviesPanel'
import {useLatestMovies} from '@/api/movieAPI'

export const Center: FC = () => {
  const {movies, isFetching} = useLatestMovies()

  return (
    <Wrapper>
      <TopHeader />
      <MoviesPanel isLoading={isFetching} moviePages={movies} />
    </Wrapper>
  )
}
