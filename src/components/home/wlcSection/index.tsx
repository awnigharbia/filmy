import React, {FC} from 'react'
import * as WelcomeSection from './style'
import Video from '../../../imgs/poster_video.mp4'

const WlcSection: FC = () => (
  <WelcomeSection.WlcSection>
    <WelcomeSection.LeftVideo autoPlay loop>
      <source src={Video} type="video/mp4" />
    </WelcomeSection.LeftVideo>
    <WelcomeSection.RightSide>
      <WelcomeSection.RightText>
        We beleive that movies deserve more
        <span role="img" aria-label="heart">
          💜
        </span>
      </WelcomeSection.RightText>
    </WelcomeSection.RightSide>
  </WelcomeSection.WlcSection>
)

export default WlcSection
