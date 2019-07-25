import React, {Component} from 'react'
import {Icon} from 'react-icons-kit'
import {ic_subtitles} from 'react-icons-kit/md/ic_subtitles'
import {downloadCloud} from 'react-icons-kit/feather/downloadCloud'

// components
import {Modal} from './style'

export default class SelectQuality extends Component {
  state = {
    activeItem: 0,
  }

  toggleLink = e => this.setState({activeItem: e.target.value})

  render() {
    const {links} = this.props
    const {activeItem} = this.state
    const href =
      (typeof links[activeItem] !== 'undefined' &&
        links[activeItem].torrent_magnet) ||
      ''
    const subtitleLink = `https://www.yifysubtitles.com/movie-imdb/${
      this.props.imdb
    }`
    return (
      <>
        <Modal.right.qualities>
          <Modal.right.select onChange={this.toggleLink}>
            {links.map((item, key) => (
              <option key={key} value={key} defaultValue={key === 0}>
                {item.file}
              </option>
            ))}
          </Modal.right.select>
        </Modal.right.qualities>
        <Modal.right.download
          href={subtitleLink}
          target="_blank"
          color="#1976d2"
        >
          <Modal.right.download.icon>
            <Icon icon={ic_subtitles} size={30} />
          </Modal.right.download.icon>
          <Modal.right.download.btn>Subtitles</Modal.right.download.btn>
        </Modal.right.download>
        <Modal.right.download
          href={href}
          target="_blank"
          color="#3ac569"
          animate
        >
          <Modal.right.download.icon>
            <Icon icon={downloadCloud} size={30} />
          </Modal.right.download.icon>
          <Modal.right.download.btn>
            Download{' '}
            <span>
              (
              {typeof links[activeItem] !== 'undefined' &&
                `${(links[activeItem].size_bytes / 1000000 / 1000).toFixed(
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
