import React, {Component} from 'react'
import {Icon} from 'react-icons-kit'
import {arrowDown} from 'react-icons-kit/feather'

// components
import {Modal} from './style'

export default class SelectQuality extends Component {
  state = {
    activeItem: 0,
  }

  toggleLink = e => this.setState({activeItem: e.target.value})

  render() {
    const {links, ytsTorrents} = this.props
    const {activeItem} = this.state
    const href =
      typeof links[activeItem] === 'undefined'
        ? ytsTorrents[activeItem - 20].url
        : links[activeItem].torrent_magnet

    return (
      <>
        <Modal.right.qualities>
          <Modal.right.select onChange={this.toggleLink}>
            {links.map((item, key) => (
              <option key={key} value={key} defaultValue={key === 0}>
                {item.file}
              </option>
            ))}
            {ytsTorrents.map((item, key) => (
              <option key={item.hash} value={key + 20}>
                {`YTS.AM ${item.quality}`}
              </option>
            ))}
          </Modal.right.select>
        </Modal.right.qualities>
        <Modal.right.download href={href} target="_blank">
          <Modal.right.download.icon>
            <Icon icon={arrowDown} size={30} />
          </Modal.right.download.icon>
          <Modal.right.download.btn>
            Download{' '}
            <span>
              (
              {typeof links[activeItem] === 'undefined'
                ? ytsTorrents[activeItem - 20].size
                : `${(links[activeItem].size_bytes / 1000000 / 1000).toFixed(
                    2,
                  )}GB`}
              )
            </span>
          </Modal.right.download.btn>
        </Modal.right.download>
      </>
    )
  }
}
