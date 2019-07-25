import React from 'react'
import {Icon} from 'react-icons-kit'
import {x} from 'react-icons-kit/feather'
import {twitter} from 'react-icons-kit/icomoon/twitter'
import {facebook} from 'react-icons-kit/fa'
import {PoseGroup} from 'react-pose'
import SelectQuality from './selectQuality'

// components
import {Modal} from './style'

export default ({
  open,
  handleOpen,
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
}) => (
  <PoseGroup>
    {open && [
      <Modal key="modal" pose={open}>
        <Modal.close onClick={handleOpen}>
          <Icon icon={x} size={30} />
        </Modal.close>

        <Modal.content key="content" pose={open}>
          <Modal.left>
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
            <Modal.social>
              <Icon icon={facebook} size={30} style={{color: '#4267B2'}} />
              <Icon
                icon={twitter}
                size={25}
                style={{color: '#1da1f2', marginLeft: '10px'}}
              />
            </Modal.social>
          </Modal.left>

          <Modal.center>
            <Category
              title="Year"
              render={
                <Modal.center.category.body>{year}</Modal.center.category.body>
              }
            />
            <Category
              title="Description"
              render={
                <Modal.center.category.body>
                  {description}
                </Modal.center.category.body>
              }
            />
            <Category
              title="Genres"
              render={
                <Modal.center.category.genres>
                  {genres.map((item, key) => (
                    <li key={key}>{item}</li>
                  ))}
                </Modal.center.category.genres>
              }
            />
            <Category
              title="Actors"
              render={
                <Modal.center.category.genres>
                  <li>Kate McKinnon</li>
                  <li>Mila Kunis</li>
                  <li>Sam Heughan</li>
                </Modal.center.category.genres>
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
                  mozallowfullscreen="mozallowfullscreen"
                  msallowfullscreen="msallowfullscreen"
                  allowFullScreen="allowFullScreen"
                  webkitallowfullscreen="webkitallowfullscreen"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                />
              }
            />
            <SelectQuality links={items} imdb={imdb} />
          </Modal.right>
        </Modal.content>
      </Modal>,
    ]}
  </PoseGroup>
)

const Category = ({title, render}) => (
  <Modal.center.category>
    <Modal.center.category.title>{title}</Modal.center.category.title>
    {render}
  </Modal.center.category>
)
