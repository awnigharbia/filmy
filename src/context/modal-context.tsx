import * as React from 'react'

type Modal = {
  handleOpen(imdb: string): void
}

export const ModalProvider = React.createContext<Modal>({
  handleOpen: () => undefined,
})

export function useModal() {
  const context = React.useContext(ModalProvider)

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }

  return context
}
