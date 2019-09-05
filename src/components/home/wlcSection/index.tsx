import * as React from 'react'
import * as WlcSection from './style'
import Video from '../../../imgs/poster_video.mp4'

export default () => (
  <WlcSection.WlcSection>
    <WlcSection.LeftVideo autoPlay loop>
      <source src={Video} type="video/mp4" />
    </WlcSection.LeftVideo>
    <WlcSection.RightSide>
      <WlcSection.RightText>
        We beleive that movies deserve more
        <span role="img" aria-label="heart">
          💜
        </span>
      </WlcSection.RightText>
    </WlcSection.RightSide>
  </WlcSection.WlcSection>
)
