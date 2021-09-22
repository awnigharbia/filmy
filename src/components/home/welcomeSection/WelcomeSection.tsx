import React, {FC} from 'react'
import * as WelcomeSectionStyle from './style'
import Video from '../../../imgs/poster_video.mp4'

export const WelcomeSection: FC = () => (
  <WelcomeSectionStyle.WlcSection>
    <WelcomeSectionStyle.LeftVideo autoPlay loop>
      <source src={Video} type="video/mp4" />
    </WelcomeSectionStyle.LeftVideo>
    <WelcomeSectionStyle.RightSide>
      <WelcomeSectionStyle.RightText>
        We beleive that movies deserve mor
        <span role="img" aria-label="heart">
          💜
        </span>
      </WelcomeSectionStyle.RightText>
    </WelcomeSectionStyle.RightSide>
  </WelcomeSectionStyle.WlcSection>
)
