import axios from 'axios'

const url2 = 'https://tinfo.apiumando.info/3/movie/'
const API_KEY = '49101d62654e71a2931722642ac07e5e'
const yts = 'https://yts.am/api/v2/'

export default {
  movies(url) {
    return {
      getByPage: (sort = 'seeds', index) =>
        axios.get(
          `${url}list?sort=${sort}&short=1&cb=&quality=720p,1080p,3d&page=${index}`,
        ),
      getByName: (name, sort = 'seeds') =>
        axios.get(
          `${url}list?sort=${sort}&short=1&cb=&quality=720p,1080p,3d&page=1&keywords=${name}`,
        ),
      getDetails: imdbId =>
        axios.get(
          `${url}movie?cb=&quality=720p,1080p,3d&page=1&imdb=${imdbId}`,
        ),
      getYtsDownload: imdbID =>
        axios.get(`${yts}list_movies.json?query_term=${imdbID}&limit=1`),
      getByGenre: (genre, page, sort = 'seeds') =>
        axios.get(
          `${url}list?sort=${sort}&short=1&cb=&quality=720p,1080p,3d&page=${page}&genre=${genre}`,
        ),
      getMoreInfo: imdbId => axios.get(`${url2}${imdbId}?api_key=${API_KEY}`),
      getImages: imdbId =>
        axios.get(`${url}${imdbId}/images?api_key=${API_KEY}`),
    }
  },
}
