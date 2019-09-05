import * as React from 'react'
import { FC, useState, ChangeEvent } from 'react'
import { Icon } from 'react-icons-kit'
import { ic_subtitles } from 'react-icons-kit/md/ic_subtitles'
import { downloadCloud } from 'react-icons-kit/feather/downloadCloud'

// components
import * as Modal from './style'

interface Link { 
file: string;
size_bytes: number;
torrent_magnet: string;
}

const SelectQuality:FC<{imdb:string, links:Link[]}> = ({ links, imdb }) => {
  const [activeItem, setActiveItem] = useState(0)


  const toggleLink = (e: ChangeEvent<HTMLSelectElement>) => {
    let selectValue:number = parseInt(e.target.value, 10)
    setActiveItem(selectValue)
  }

  const href =
    (typeof links[activeItem] !== 'undefined' &&
      links[activeItem].torrent_magnet) ||
    ''
  const subtitleLink = `https://www.yifysubtitles.com/movie-imdb/${
    imdb
    }`

  return (
    <>
      <Modal.qualities>
        <Modal.selectQuality onChange={toggleLink}>
          {links.map((item, key) => {
            const defaultValue = `${key === 0}`
            return (
            <option key={key} value={key} defaultValue={defaultValue}>
              {item.file}
            </option>
          )})}
        </Modal.selectQuality>
      </Modal.qualities>
      <Modal.download
        animate={true}
        href={subtitleLink}
        target="_blank"
        color="#1976d2"
      >
        <Modal.icon>
          <Icon icon={ic_subtitles} size={30} />
        </Modal.icon>
        <Modal.downloadBtn>Subtitles</Modal.downloadBtn>
      </Modal.download>
      <Modal.download
        href={href}
        target="_blank"
        color="#3ac569"
        animate
      >
        <Modal.icon>
          <Icon icon={downloadCloud} size={30} />
        </Modal.icon>
        <Modal.downloadBtn>
          Download{' '}
          <span>
            (
              {typeof links[activeItem] !== 'undefined' &&
              `${(links[activeItem].size_bytes / 1000000 / 1000).toFixed(
                2,
              )}GB`}
            )
            </span>
        </Modal.downloadBtn>
      </Modal.download>
    </>
  )
}

export default SelectQuality