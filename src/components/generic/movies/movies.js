import React, {useRef, useEffect} from 'react'
import {Movies} from './style'
import MovieCard from './movieCard'
import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css'
import {ModalProvider} from '../../App'
import useBottom from '../../hooks/useBottom'
import BounceLoader from 'react-spinners/BounceLoader'

function MoviesPanel(props) {
  const renderLoading = loading =>
    Array.from(new Array(20), (v, ii) => (
      <ReactPlaceholder
        key={ii}
        type="rect"
        ready={!loading}
        color="#E0E0E0"
        showLoadingAnimation
        style={placeholderStyle}
      >
        <></>
      </ReactPlaceholder>
    ))

  const renderMovies = () => {
    const panelRef = useRef()
    const {isBottom} = (props.loader && useBottom(panelRef)) || false

    useEffect(() => {
      if (isBottom) props.fetchMore()
    }, [isBottom])

    return (
      <>
        {props.movies !== undefined &&
          props.movies.map((item, key) => (
            <ModalProvider.Consumer key={key}>
              {open => <MovieCard {...item} open={open} />}
            </ModalProvider.Consumer>
          ))}
        {props.loader && (
          <Movies.loader
            ref={panelRef}
            style={{width: '100%', height: '100px'}}
          >
            <BounceLoader color="#602f75" />
          </Movies.loader>
        )}
      </>
    )
  }

  return (
    <Movies>
      {props.loading ? renderLoading(props.loading) : renderMovies()}
    </Movies>
  )
}

const placeholderStyle = {
  width: '200px',
  height: '346px',
  marginTop: '10px',
  borderRadius: '5px',
}

export default MoviesPanel
