import {Filters} from 'src/utils/filters'
import axios from 'axios'

const apiURL = import.meta.env.VITE_API_URL
const apiKEY = import.meta.env.VITE_API_KEY
const TORRENT_API_URL = 'https://yts.lt/api/v2/'

export function client(
  url: string,
  params?: Record<string, string | number | boolean>,
) {
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

export const API = {
  movies() {
    return {
      getByPage: (index: number): Promise<Movie[]> => {
        return client('discover/movie', {
          sort_by: Filters.POPULARITY,
          page: index,
        }).then(res => {
          return res.results
        })
      },
      getByName: (name: string, sort = 'seeds') =>
        axios.get(
          `${apiURL}list?sort=${sort}&short=1&cb=&quality=720p,1080p,3d&page=1&keywords=${name}`,
        ),
      getDetails: (imdbId: string) =>
        axios.get(
          `${apiURL}movie?cb=&quality=720p,1080p,3d&page=1&imdb=${imdbId}`,
        ),
      getYtsDownload: (imdbID: string) =>
        axios.get(
          `${TORRENT_API_URL}list_movies.json?query_term=${imdbID}&limit=1`,
        ),
      getByGenre: async (genre: string[], page: number, sort = 'seeds') => {
        return axios.get(
          `${apiURL}list?sort=${sort}&short=1&cb=&quality=720p,1080p,3d&page=${page}&genre=${genre}`,
        )
      },
      getMoreInfo: (imdbId: string) =>
        axios.get(`${apiURL}${imdbId}?api_key=${apiKEY}`),
      getImages: (imdbId: string) =>
        axios.get(`${apiURL}${imdbId}/images?api_key=${apiKEY}`),
    }
  },
}
