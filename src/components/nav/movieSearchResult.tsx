import * as React from 'react'
import {FC} from 'react'
import './style.css'

export const MovieSearchResult: FC<{
  title: string
  poster_med: string
  year: number
  openModal(imdb: string): void
  imdb: string
}> = ({title, poster_med, year, openModal, imdb}) => (
  <div className="search-result-item" onClick={() => openModal(imdb)}>
    <div className="search-result-item-img">
      <img src={poster_med} alt="films-boster" />
    </div>
    <div className="search-result-item-info">
      <h1>
        {title} ({year})
      </h1>
    </div>
  </div>
)
