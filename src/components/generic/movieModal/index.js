import React, {useState} from 'react'
import ModalContent from './modalContent'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'

export default function MovieModal(props) {
  const [loading, setLoading] = useState(false)

  return <ModalContent loading={loading} {...props} />
}
