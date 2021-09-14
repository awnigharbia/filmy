import {Filters} from 'src/utils/filters'
import axios from 'axios'
import {useInfiniteQuery, UseInfiniteQueryResult, useQuery} from 'react-query'

const apiURL = import.meta.env.VITE_API_URL
const apiKEY = import.meta.env.VITE_API_KEY
const TORRENT_API_URL = 'https://yts.lt/api/v2/'

export function client(
  url: string,
  params?: Record<string, string | number | boolean>,
): Promise<any> {
  const config = {
    baseURL: apiURL,
    params: {
      api_key: apiKEY,
      page: 1,
      language: 'en-US',
      ...params,
    },
  }

  return axios.get(`${url}`, config).then(({data, status}) => {
    if (status === 200) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

const defaultConfig = {
  sort_by: Filters.RELEASE_DATE,
  primary_release_year: 2021,
  include_adult: false,
}

function showLoading(result: UseInfiniteQueryResult<any, unknown>) {
  if (result.isFetchingNextPage) {
    return false
  }

  return result.isFetching
}

export const getLatestMovies = async (pageParam = 1) => {
  const data = await client('discover/movie', {
    ...defaultConfig,
    page: pageParam,
  })

  return data
}

export function useLatestMovies(key?: string) {
  const result = useInfiniteQuery(
    ['latestMovies', key],
    ({pageParam = 1}) => getLatestMovies(pageParam),
    {
      getNextPageParam: lastQuery => {
        const {total_pages: totalPages, page: currentPage} = lastQuery

        return totalPages > currentPage ? currentPage + 1 : null
      },
    },
  )

  const isLoading = showLoading(result)

  return {...result, movies: result.data, isLoading}
}

export const getMoviesWithGenre = async (pageParam = 1, genre: string) => {
  const data = await client('discover/movie', {
    ...defaultConfig,
    page: pageParam,
    with_genre: genre,
  })

  return data
}

export function useMoviesWithGenre(genre: string) {
  const result = useInfiniteQuery(
    ['latestMovies', genre],
    ({pageParam = 1}) => getMoviesWithGenre(pageParam, genre),
    {
      getNextPageParam: lastQuery => {
        const {total_pages: totalPages, page: currentPage} = lastQuery

        return totalPages > currentPage ? currentPage + 1 : null
      },
    },
  )

  const isLoading = showLoading(result)

  return {...result, movies: result.data, isLoading}
}

async function getPopularMovies() {
  const data = await client('discover/movie', {sort_by: Filters.POPULARITY})

  return data.results
}

export function usePopularMovies() {
  const result = useQuery('popularMovies', getPopularMovies)

  return {...result, movies: result.data || []}
}

async function getMovieByName(movieTitle: string) {
  const data = await client('search/movie', {
    query: movieTitle,
  })

  return data.results
}

export function useMovieSearch(movieTitle: string) {
  const result = useQuery(
    ['movieSearch', movieTitle],
    () => getMovieByName(movieTitle),
    {
      enabled: !!movieTitle,
    },
  )

  return {...result, movies: result.data || []}
}

async function getMovieDetails(movieId: number) {
  const data = await client(`movie/${movieId}`)

  return data
}

export function useMovie(movieId: number) {
  const result = useQuery(['movie', movieId], () => getMovieDetails(movieId), {
    enabled: !!movieId,
  })

  return {...result, movie: result.data}
}
