import * as React from 'react'
import { FC } from 'react'
import { Icon } from 'react-icons-kit'
import { x } from 'react-icons-kit/feather'
import { twitter } from 'react-icons-kit/icomoon/twitter'
import { facebook } from 'react-icons-kit/fa'
import { PoseGroup } from 'react-pose'
import SelectQuality from './selectQuality'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import { Props } from './index'

// components
import * as Modal from './style'

const ModalContent: FC<Props> = ({
  open,
  
  handleClose,
  data: {
    title,
    poster_big,
    rating,
    description,
    year,
    genres,
    trailer,
    items,
    imdb,
  },
}) => {
  // {
  //   open ? useLockBodyScroll('lock') : useLockBodyScroll('unlock')
  // }
  return (
    <PoseGroup>
      {open && [
        <Modal.Modal key="modal" pose={open}>
          <Modal.close onClick={handleClose}>
            <Icon icon={x} size={30} />
          </Modal.close>

          <Modal.ModalContent key="content" >
            <Modal.leftSection>
              <Modal.img src={poster_big} alt={poster_big} />

              <Modal.name>{title}</Modal.name>
              <Modal.bio>
                <span role="img" aria-label="globe">
                  🌐
                </span>
                English -
                <span role="img" aria-label="star">
                  ⭐
                </span>
                {rating}/10
              </Modal.bio>
              <Modal.socialShare>
                <Icon icon={facebook} size={30} style={{ color: '#4267B2' }} />
                <Icon
                  icon={twitter}
                  size={25}
                  style={{ color: '#1da1f2', marginLeft: '10px' }}
                />
              </Modal.socialShare>
            </Modal.leftSection>

            <Modal.center>
              <Category
                title="Year"
                render={
                  <Modal.catBody>
                    {year}
                  </Modal.catBody>
                }
              />
              <Category
                title="Description"
                render={
                  <Modal.catBody>
                    {description}
                  </Modal.catBody>
                }
              />
              <Category
                title="Genres"
                render={
                  <Modal.catGenres>
                    {genres.map((item, key) => (
                      <li key={key}>{item}</li>
                    ))}
                  </Modal.catGenres>
                }
              />
              <Category
                title="Actors"
                render={
                  <Modal.catGenres>
                    <li>Kate McKinnon</li>
                    <li>Mila Kunis</li>
                    <li>Sam Heughan</li>
                  </Modal.catGenres>
                }
              />
            </Modal.center>
            <Modal.right>
              <Category
                title="Trailer"
                render={
                  <iframe
                    title="trailer"
                    width="100%"
                    height="250"
                    src={`https://www.youtube.com/embed/${trailer}`}
                    frameBorder="0"
                    allowFullScreen
                    
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  />
                }
              />
              <SelectQuality links={items} imdb={imdb} />
            </Modal.right>
          </Modal.ModalContent>
        </Modal.Modal>,
      ]}
    </PoseGroup>
  )
}

export default ModalContent

const Category: FC<{ title: string, render: React.ReactChild }> = ({ title, render }) => (
  <Modal.category>
    <Modal.catTitle>{title}</Modal.catTitle>
    {render}
  </Modal.category>
)
