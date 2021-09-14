type genre = {
  id: number
  name: string
}

interface Movie {
  id: number
  title: string
  poster_path: string
  release_date: number
  genres: genre[]
  genre_ids: number[]
  overview: string
  vote_average: number
  imdb: string
}
