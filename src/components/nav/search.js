import React, {useRef, useState} from 'react'
import './style.css'
import {Icon} from 'react-icons-kit'
import {search} from 'react-icons-kit/feather'
import API from 'movie'
import useOnClickOutside from 'hooks/outSideHook.js'

// Componets
import FilmSearchResult from './filmSearchResult'

// constant
const url = 'https://api.apiumando.info/'

// Hook-based Component
function useSearch() {
  const [focused, setFocused] = useState(0)
  const [text, setText] = useState('')
  const [results, setResults] = useState([])
  const searchResultRef = useRef()

  useOnClickOutside(searchResultRef, () => setFocused(0))

  function handleFocus() {
    if (text.trim(' ') === '') {
      setFocused(1)
      return
    }
    setFocused(2)
  }

  function handleChange(e) {
    setText(e.target.value)
    setFocused(2)
    if (text.trim() === '') {
      setFocused(2)
    }
    fetchMovies(text)
  }

  function fetchMovies(name) {
    if (name !== '')
      API.movies(url)
        .getByName(name)
        .then(data => setResults(data.data.MovieList.slice(0, 5)))
  }

  return {
    focused,
    text,
    results,
    searchResultRef,
    handleChange,
    handleFocus,
  }
}

function Search(props) {
  const {
    text,
    results,
    focused,
    searchResultRef,
    handleChange,
    handleFocus,
  } = useSearch()
  return (
    <div ref={searchResultRef} className="search">
      {focused === 2 && (
        <div className="search-result">
          <div className="search-results">
            {results.map((item, key) => {
              return <FilmSearchResult key={key} {...item} open={props.open} />
            })}
          </div>
        </div>
      )}
      <div
        className={
          focused === 0
            ? 'search-input-wrapper'
            : 'search-input-wrapper active-search'
        }
        style={{border: focused === 2 ? 'none' : ''}}
      >
        <div className="search-input-img-wrapper">
          <Icon size={20} icon={search} />
        </div>
        <input
          type="text"
          onChange={handleChange}
          value={text}
          onFocus={handleFocus}
          className="search-input"
          placeholder="Search for movie"
        />
      </div>
    </div>
  )
}

export default Search
