import React, {Component} from 'react'
import ModalContent from './modalContent'

export default class MovieModal extends Component {
  state = {
    loading: true,
  }

  render() {
    return <ModalContent {...this} {...this.state.data} {...this.props} />
  }
}
