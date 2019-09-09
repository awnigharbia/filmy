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

const SelectQuality: FC<{ imdb: string, links: Link[] }> = ({ links, imdb }) => {
  const [activeItem, setActiveItem] = useState(0)


  const toggleLink = (e: ChangeEvent<HTMLSelectElement>) => {
    let selectValue = parseInt(e.target.value, 10)
    setActiveItem(selectValue)
  }

  const getSizeGb = (sizeInBytes: number): string => {
    const sizeToGb = (sizeInBytes / 1000000 / 1000).toFixed(2)

    return `(${sizeToGb}GB)`
  }

  const activeLink = links[activeItem]
  const href = activeLink ? activeLink.torrent_magnet : ""


  const subtitleLink = `https://www.yifysubtitles.com/movie-imdb/${
    imdb
    }`

  return (
    <>
      <Modal.Qualities>
        <Modal.SelectQuality onChange={toggleLink}>
          {links.map((item, key) => {
            const defaultValue = `${key === 0}`
            return (
              <option key={key} value={key} defaultValue={defaultValue}>
                {item.file}
              </option>
            )
          })}
        </Modal.SelectQuality>
      </Modal.Qualities>
      <Modal.Download
        animate={true}
        href={subtitleLink}
        target="_blank"
        color="#1976d2"
      >
        <Modal.Icon>
          <Icon icon={ic_subtitles} size={30} />
        </Modal.Icon>
        <Modal.DownloadBtn>Subtitles</Modal.DownloadBtn>
      </Modal.Download>
      <Modal.Download
        href={href}
        target="_blank"
        color="#3ac569"
        animate
      >
        <Modal.Icon>
          <Icon icon={downloadCloud} size={30} />
        </Modal.Icon>
        <Modal.DownloadBtn>
          Download{' '}
          <span>
            {getSizeGb(typeof links[activeItem] !== 'undefined' ? links[activeItem].size_bytes : 0)}
          </span>
        </Modal.DownloadBtn>
      </Modal.Download>
    </>
  )
}

export default SelectQuality