import {useModal} from '@/context/modal-context'
import * as React from 'react'
import {FC} from 'react'
import './style.css'

export const MovieSearchResult: FC<{
  id: number
  title: string
  poster_path: string
  release_date: number
}> = ({id, title, poster_path, release_date}) => {
  const {handleOpen} = useModal()

  return (
    <div className="search-result-item" onClick={() => handleOpen(id)}>
      <div className="search-result-item-img">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="films-boster"
        />
      </div>
      <div className="search-result-item-info">
        <h1>
          {title} ({release_date})
        </h1>
      </div>
    </div>
  )
}
