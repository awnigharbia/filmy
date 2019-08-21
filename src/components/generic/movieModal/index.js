import React, {useState} from 'react'
import ModalContent from './modalContent'

export default function MovieModal(props) {
  const [loading, setLoading] = useState(false)

  return <ModalContent loading={loading} {...props} />
}
