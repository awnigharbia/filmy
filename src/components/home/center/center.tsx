import * as React from 'react'
import {FC} from 'react'
import {Wrapper} from './style'
import {TopHeader} from './TopHeader'
import {MoviesPanel} from '../../generic/movies/Movies'

export const Center: FC<{loading: boolean; movies: Movie[]; id: number}> = ({
  loading,
  movies,
  id,
}) => {
  return (
    <Wrapper>
      <TopHeader id={id} />
      <MoviesPanel loading={loading} movies={movies} loader={false} />
    </Wrapper>
  )
}
