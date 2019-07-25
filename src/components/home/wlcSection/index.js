import React from 'react'
import {WlcSection} from './style'
import Video from '../../../imgs/poster_video.mp4'

export default () => (
  <WlcSection>
    <WlcSection.video autoPlay loop>
      <source src={Video} type="video/mp4" />
    </WlcSection.video>
    <WlcSection.right>
      <WlcSection.right.text>
        We beleive that movies deserve more
        <span role="img" aria-label="heart">
          💜
        </span>
      </WlcSection.right.text>
    </WlcSection.right>
  </WlcSection>
)
