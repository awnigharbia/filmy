import React, {ChangeEvent, FC, useRef, useState} from 'react'
import {Icon} from 'react-icons-kit'
import {search} from 'react-icons-kit/feather'
import {useOnClickOutside} from 'src/components/hooks/outSideHook'
import {useMovieSearch} from '../../api/movieAPI'
import {MovieSearchResult} from './MovieSearchResult'
import './style.css'
import useDebounce from '../hooks/useDebounce'
import {ErrorFallback} from './style'

function useSearch() {
  const [focused, setFocused] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedSearchQuery = useDebounce(searchQuery, 500)
  const {movies, isError} = useMovieSearch(debouncedSearchQuery)
  const searchResultRef = useRef<HTMLDivElement>(null)

  const params = {
    ref: searchResultRef,
    handler: () => setFocused(0),
  }

  useOnClickOutside(params)

  function handleFocus() {
    if (searchQuery.trim() === '') {
      setFocused(1)
      return
    }
    setFocused(2)
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value)
    setFocused(2)
    if (searchQuery.trim() === '') {
      setFocused(2)
    }
  }

  return {
    focused,
    text: searchQuery,
    movies,
    searchResultRef,
    handleChange,
    handleFocus,
    isError,
  }
}

export const Search: FC = () => {
  const {
    text,
    movies,
    focused,
    searchResultRef,
    handleChange,
    handleFocus,
    isError,
  } = useSearch()
  console.log(isError)

  return (
    <div ref={searchResultRef} className="search">
      {focused === 2 && (
        <div className="search-result">
          <div className="search-results">
            {isError && (
              <ErrorFallback>Oops, something went wrong!</ErrorFallback>
            )}
            {movies.map((item, key) => {
              return <MovieSearchResult key={key} {...item} />
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
