import React, {useRef, useState, ChangeEvent, FC} from 'react'
import './style.css'
import {Icon} from 'react-icons-kit'
import {search} from 'react-icons-kit/feather'
import {API} from 'src/api/movie'
import {useOnClickOutside} from 'src/components/hooks/outSideHook'
import {MovieSearchResult} from './MovieSearchResult'

function useSearch() {
  const [focused, setFocused] = useState(0)
  const [text, setText] = useState('')
  const [results, setResults] = useState([])
  const searchResultRef = useRef<HTMLDivElement>(null)

  const params = {
    ref: searchResultRef,
    handler: () => setFocused(0),
  }

  useOnClickOutside(params)

  function handleFocus() {
    if (text.trim() === '') {
      setFocused(1)
      return
    }
    setFocused(2)
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
    setFocused(2)
    if (text.trim() === '') {
      setFocused(2)
    }
    fetchMovies(text)
  }

  function fetchMovies(name: string) {
    if (name !== '')
      API.movies()
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

export const Search: FC<{openModal(imdb: string): void}> = ({openModal}) => {
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
              return <MovieSearchResult key={key} {...item} open={openModal} />
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
          <Icon
            size={20}
            icon={search}
            style={{
              height: '20px',
              display: 'inline-block',
              marginTop: '-6px',
            }}
          />
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
