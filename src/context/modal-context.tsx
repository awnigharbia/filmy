import * as React from 'react'

interface ModalContextType {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  handleOpen: (movieId: number) => void
  movieId: number | null
}

export const ModalContext = React.createContext<ModalContextType>({
  isOpen: false,
  setIsOpen: () => {},
  handleOpen: () => {},
  movieId: null,
})

export const Modal = ({children}: {children: React.ReactNode}) => {
  const [movieId, setMovieId] = React.useState<number | null>(null)
  const [isOpen, setIsOpen] = React.useState(false)

  function handleOpen(movieId: number) {
    setMovieId(movieId)
    setIsOpen(true)
  }

  const value = {isOpen, handleOpen, setIsOpen, movieId}

  return (
    <ModalContext.Provider value={value}>{children} </ModalContext.Provider>
  )
}

export function useModal() {
  const context = React.useContext(ModalContext)

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }

  return context
}
