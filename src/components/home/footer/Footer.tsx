import * as React from 'react'
import * as FooterStyle from './style'
import Popcorn from 'src/imgs/popcorn.svg'

export const Footer = (): JSX.Element => (
  <FooterStyle.Footer>
    <FooterStyle.text>
      Handcrafted by{' '}
      <FooterStyle.author>
        Awni Gharbia
        <span role="img" aria-label="hand">
          💪
        </span>
      </FooterStyle.author>
    </FooterStyle.text>
    <FooterStyle.img src={Popcorn} alt="poster" />
  </FooterStyle.Footer>
)
