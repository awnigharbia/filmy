import {noop} from '@/utils/noop'
import * as React from 'react'

interface MovieModalContextType {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  handleOpen: (movieId: number) => void
  movieId: number
}

export const MovieModalContext = React.createContext<MovieModalContextType>({
  isOpen: false,
  setIsOpen: noop,
  handleOpen: noop,
  movieId: 0,
})

export const MovieModal = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [movieId, setMovieId] = React.useState<number>(0)
  const [isOpen, setIsOpen] = React.useState(false)

  function handleOpen(movieId: number) {
    setMovieId(movieId)
    setIsOpen(true)
  }

  const value = {isOpen, handleOpen, setIsOpen, movieId}

  return (
    <MovieModalContext.Provider value={value}>
      {children}{' '}
    </MovieModalContext.Provider>
  )
}

export function useMovieModal(): MovieModalContextType {
  const context = React.useContext(MovieModalContext)

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }

  return context
}
