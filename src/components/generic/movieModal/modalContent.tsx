import * as React from 'react'
import {FC} from 'react'
import {Icon} from 'react-icons-kit'
import {x} from 'react-icons-kit/feather'
import {twitter} from 'react-icons-kit/icomoon/twitter'
import {facebook} from 'react-icons-kit/fa'
import {PoseGroup} from 'react-pose'
import SelectQuality from './selectQuality'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import {Props} from './index'

import * as Modal from './style'

const Category: FC<{title: string; children: React.ReactChild}> = ({
  title,
  children,
}) => (
  <Modal.Category>
    <Modal.CatTitle>{title}</Modal.CatTitle>
    {children}
  </Modal.Category>
)

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
  //Fix me:lockscroll
  // {
  //   open ? useLockBodyScroll('lock') : useLockBodyScroll('unlock')
  // }
  return (
    <PoseGroup>
      {open && [
        <Modal.Modal key="modal" pose={open}>
          <Modal.Close onClick={handleClose}>
            <Icon icon={x} size={30} />
          </Modal.Close>

          <Modal.ModalContent key="content">
            <Modal.LeftSection>
              <Modal.Img src={poster_big} alt={poster_big} />

              <Modal.Name>{title}</Modal.Name>
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
              <Modal.SocialShare>
                <Icon icon={facebook} size={30} style={{color: '#4267B2'}} />
                <Icon
                  icon={twitter}
                  size={25}
                  style={{color: '#1da1f2', marginLeft: '10px'}}
                />
              </Modal.SocialShare>
            </Modal.LeftSection>

            <Modal.Center>
              <Category title="Year">
                <Modal.CatBody>{year}</Modal.CatBody>
              </Category>
              <Category title="Description">
                <Modal.CatBody>{description}</Modal.CatBody>
              </Category>
              <Category title="Genres">
                <Modal.CatGenres>
                  {genres.map((item, key) => (
                    <li key={key}>{item}</li>
                  ))}
                </Modal.CatGenres>
              </Category>
              <Category title="Actors">
                <Modal.CatGenres>
                  <li>Kate McKinnon</li>
                  <li>Mila Kunis</li>
                  <li>Sam Heughan</li>
                </Modal.CatGenres>
              </Category>
            </Modal.Center>
            <Modal.Right>
              <Category title="Trailer">
                <iframe
                  title="trailer"
                  width="100%"
                  height="250"
                  src={`https://www.youtube.com/embed/${trailer}`}
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                />
              </Category>
              <SelectQuality links={items} imdb={imdb} />
            </Modal.Right>
          </Modal.ModalContent>
        </Modal.Modal>,
      ]}
    </PoseGroup>
  )
}

export default ModalContent
