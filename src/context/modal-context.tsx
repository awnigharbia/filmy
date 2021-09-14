import * as React from 'react'

export const ModalContext = React.createContext<any>({})

export function Modal(props: any) {
  const [movieId, setMovieId] = React.useState<number | null>()
  const [isOpen, setIsOpen] = React.useState(false)

  function handleOpen(movieId: number) {
    setMovieId(movieId)
    setIsOpen(true)
  }

  const value = {isOpen, handleOpen, setIsOpen, movieId}

  return <ModalContext.Provider value={value} {...props} />
}

export function useModal() {
  const context = React.useContext(ModalContext)

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }

  return context
}
