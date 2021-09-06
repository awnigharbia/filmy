import * as React from 'react'
import {FC} from 'react'

import {ModalContent} from './ModalContent'

interface Data {
  actors: string
  description: string
  directors: string
  genres: string[]
  id: string
  imdb: string
  poster_big: string
  rating: number
  title: string
  trailer: string
  year: number
  items: []
}

export interface Props {
  open: boolean
  handleOpen(imdb: string): void
  handleClose(): void
  data: Data
}

export const MovieModal: FC<Props> = props => {
  return <ModalContent {...props} />
}
