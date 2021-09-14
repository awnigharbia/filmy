import * as React from 'react'
import {FC} from 'react'

import {useModal} from '@/context/modal-context'
import {useMovie} from '@/api/movie_api'
import {ModalContent} from './ModalContent'

export const MovieModal: FC = () => {
  return <ModalContent />
}
