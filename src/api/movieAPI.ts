import {Filters} from 'src/utils/filters'
import axios from 'axios'
import {
  GetNextPageParamFunction,
  InfiniteData,
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQuery,
  UseQueryResult,
} from 'react-query'

const apiURL = import.meta.env.VITE_API_URL
const apiKEY = import.meta.env.VITE_API_KEY
const TORRENT_API_URL = 'https://yts.lt/api/v2/'

const defaultConfig = {
  sort_by: Filters.RELEASE_DATE,
  primary_release_year: 2021,
  include_adult: false,
}

export function client<Response>(
  url: string,
  params?: Record<string, string | number | boolean>,
): Promise<Response> {
  const config = {
    baseURL: apiURL,
    params: {
      api_key: apiKEY,
      page: 1,
      language: 'en-US',
      ...params,
    },
  }

  return axios.get<Response>(`${url}`, config).then(({data, status}) => {
    if (status === 200) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

function showLoading(result: UseInfiniteQueryResult): boolean {
  if (result.isFetchingNextPage) {
    return false
  }

  return result.isFetching
}

export interface MoviesResult {
  page: number
  results: Movie[]
  total_pages: number
}

export const getLatestMovies = async (pageParam = 1): Promise<MoviesResult> => {
  try {
    const data = await client<MoviesResult>('discover/movie', {
      ...defaultConfig,
      page: pageParam,
    })

    return data
  } catch (error) {
    console.error(`Unable to fetch latest movies`, error)
    return Promise.reject(error)
  }
}

const getNextPageParam: GetNextPageParamFunction<MoviesResult> = (
  lastQuery,
): number | null => {
  const {total_pages: totalPages, page: currentPage} = lastQuery

  return totalPages > currentPage ? currentPage + 1 : null
}

type UseMovieInfiniteQueryResult = UseInfiniteQueryResult<MoviesResult> & {
  movies: InfiniteData<MoviesResult> | undefined
  isFirstLoad: boolean
}

export function useLatestMovies(key?: string): UseMovieInfiniteQueryResult {
  const result = useInfiniteQuery<MoviesResult>(
    ['latestMovies', key],
    ({pageParam = 1}) => getLatestMovies(pageParam),
    {
      getNextPageParam: getNextPageParam,
    },
  )

  const isFirstLoad = showLoading(result)

  return {...result, movies: result.data, isFirstLoad}
}

export const getMoviesWithGenre = async (
  pageParam = 1,
  genre: string,
): Promise<MoviesResult> => {
  try {
    const data = await client<MoviesResult>('discover/movie', {
      ...defaultConfig,
      page: pageParam,
      with_genre: genre,
    })

    return data
  } catch (error) {
    console.error(`Unable to fetch movies with genre`, error)
    return Promise.reject(error)
  }
}

export function useMoviesWithGenre(genre: string): UseMovieInfiniteQueryResult {
  const result = useInfiniteQuery<MoviesResult>(
    ['latestMovies', genre],
    ({pageParam = 1}) => getMoviesWithGenre(pageParam, genre),
    {
      getNextPageParam: getNextPageParam,
    },
  )

  const isFirstLoad = showLoading(result)

  return {...result, movies: result.data, isFirstLoad}
}

const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const data = await client<MoviesResult>('discover/movie', {
      sort_by: Filters.POPULARITY,
    })

    return data.results
  } catch (error) {
    console.error(`Unable to fetch popular movies`, error)
    return Promise.reject(error)
  }
}

type UseMoviesQueryResult = UseQueryResult<Movie[]> & {
  movies: Movie[]
}

export function usePopularMovies(): UseMoviesQueryResult {
  const result = useQuery('popularMovies', getPopularMovies)

  return {...result, movies: result.data || []}
}

async function getMovieSearch(movieTitle: string): Promise<Movie[]> {
  try {
    const data = await client<MoviesResult>('search/movie', {
      query: movieTitle,
    })

    return data.results
  } catch (error) {
    console.error(`Unable to fetch movie by name`, error)
    return Promise.reject(error)
  }
}

export function useMovieSearch(movieTitle: string): UseMoviesQueryResult {
  const result = useQuery(
    ['movieSearch', movieTitle],
    () => getMovieSearch(movieTitle),
    {
      enabled: !!movieTitle,
    },
  )

  return {...result, movies: result.data || []}
}

async function getMovieDetails(
  movieId: number | null,
): Promise<Movie | undefined> {
  try {
    if (movieId === null) {
      console.error('No movie id was supplied to getMovieDetails')
      return undefined
    }
    const data = await client<Movie>(`movie/${movieId}`)

    return data
  } catch (error) {
    console.error(`Unable to fetch movie details`, error)
    return Promise.reject(error)
  }
}

type UseMovieQueryResult = UseQueryResult<Movie | undefined> & {
  movie: Movie | undefined
}

export function useMovie(movieId: number | null): UseMovieQueryResult {
  const result = useQuery(['movie', movieId], () => getMovieDetails(movieId), {
    enabled: !!movieId,
  })

  return {...result, movie: result.data}
}
