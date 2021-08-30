import axios from 'axios'

const API_URL = 'https://api.themoviedb.org/3/'
const API_KEY = '3c817edb2c2a10ea7095bc697864900d'
const TORRENT_API_URL = 'https://yts.lt/api/v2/'

function fetch(url: string, params?: any) {
  return axios.get(`${API_URL}${url}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      ...params,
    },
  })
}

export default {
  movies(url: string) {
    return {
      getByPage: (sort = 'seeds', index: number) => {
        return fetch('movie/popular', {
          page: index,
        }).then(res => {
          return res.data.results
        })
      },
      getByName: (name: string, sort = 'seeds') =>
        axios.get(
          `${url}list?sort=${sort}&short=1&cb=&quality=720p,1080p,3d&page=1&keywords=${name}`,
        ),
      getDetails: (imdbId: string) =>
        axios.get(
          `${url}movie?cb=&quality=720p,1080p,3d&page=1&imdb=${imdbId}`,
        ),
      getYtsDownload: (imdbID: string) =>
        axios.get(
          `${TORRENT_API_URL}list_movies.json?query_term=${imdbID}&limit=1`,
        ),
      getByGenre: async (genre: [], page: number, sort = 'seeds') => {
        return axios.get(
          `${url}list?sort=${sort}&short=1&cb=&quality=720p,1080p,3d&page=${page}&genre=${genre}`,
        )
      },
      getMoreInfo: (imdbId: string) =>
        axios.get(`${API_URL}${imdbId}?api_key=${API_KEY}`),
      getImages: (imdbId: string) =>
        axios.get(`${url}${imdbId}/images?api_key=${API_KEY}`),
    }
  },
}
