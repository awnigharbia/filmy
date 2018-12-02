import React, {Component} from 'react'
import './style.css'

export default ({title, poster_med, year, open, imdb}) => (
  <div className="search-result-item" onClick={() => open(imdb)}>
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
