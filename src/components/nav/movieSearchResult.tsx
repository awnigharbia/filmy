import {useMovieModal} from '@/context/MovieModalContext'
import * as React from 'react'
import {FC} from 'react'
import './style.css'

export const MovieSearchResult: FC<{
  id: number
  title: string
  poster_path: string
  release_date: number
}> = ({id, title, poster_path: posterPath, release_date: releaseDate}) => {
  const {handleOpen} = useMovieModal()

  return (
    <div className="search-result-item" onClick={() => handleOpen(id)}>
      <div className="search-result-item-img">
        <img
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt="films-boster"
        />
      </div>
      <div className="search-result-item-info">
        <h1>
          {title} ({releaseDate})
        </h1>
      </div>
    </div>
  )
}
