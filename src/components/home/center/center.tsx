import * as React from 'react'
import {FC} from 'react'
import {Wrapper} from './style'
import {TopHeader} from './TopHeader'
import {MoviesPanel} from '@/components/generic/movies/MoviesPanel'
import {client} from 'src/api/movie_api'
import {Filters} from 'src/utils/filters'
import {useQuery} from 'react-query'

const getLatestMovies = async () => {
  const data = await client('discover/movie', {
    sort_by: Filters.RELEASE_DATE,
    primary_release_year: 2021,
    include_adult: false,
  })

  return data.results
}

function useLatestMovies() {
  return useQuery('latestMovies', getLatestMovies)
}

export const Center: FC<{id: number}> = ({id}) => {
  const {data: movies, isFetching} = useLatestMovies()

  return (
    <Wrapper>
      <TopHeader id={id} />
      <MoviesPanel loading={isFetching} movies={movies} loader={false} />
    </Wrapper>
  )
}
