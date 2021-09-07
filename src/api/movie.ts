import axios from 'axios'

const API_URL = 'https://api.themoviedb.org/3/'
const API_KEY = '3c817edb2c2a10ea7095bc697864900d'
const TORRENT_API_URL = 'https://yts.lt/api/v2/'

function fetch(url: string, params?: Record<string, string | number>) {
  return axios.get(`${API_URL}${url}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      ...params,
    },
  })
}

export const API = {
  movies() {
    return {
      getByPage: (index: number): Promise<Movie[]> => {
        return fetch('discover/movie?sort_by=popularity.desc', {
          page: index,
        }).then(res => {
          console.log(res.data.results.length)

          return res.data.results
        })
      },
      getByName: (name: string, sort = 'seeds') =>
        axios.get(
          `${API_URL}list?sort=${sort}&short=1&cb=&quality=720p,1080p,3d&page=1&keywords=${name}`,
        ),
      getDetails: (imdbId: string) =>
        axios.get(
          `${API_URL}movie?cb=&quality=720p,1080p,3d&page=1&imdb=${imdbId}`,
        ),
      getYtsDownload: (imdbID: string) =>
        axios.get(
          `${TORRENT_API_URL}list_movies.json?query_term=${imdbID}&limit=1`,
        ),
      getByGenre: async (genre: string[], page: number, sort = 'seeds') => {
        return axios.get(
          `${API_URL}list?sort=${sort}&short=1&cb=&quality=720p,1080p,3d&page=${page}&genre=${genre}`,
        )
      },
      getMoreInfo: (imdbId: string) =>
        axios.get(`${API_URL}${imdbId}?api_key=${API_KEY}`),
      getImages: (imdbId: string) =>
        axios.get(`${API_URL}${imdbId}/images?api_key=${API_KEY}`),
    }
  },
}
