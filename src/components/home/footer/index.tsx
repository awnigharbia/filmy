import * as React from 'react'
import * as Footer from './style'
import Popcorn from '../../../imgs/popcorn.svg'

export default () => (
  <Footer.Footer>
    <Footer.text>
      Handcrafted by{' '}
      <Footer.author>
        Awni Gharbia
        <span role="img" aria-label="hand">
          💪
        </span>
      </Footer.author>
    </Footer.text>
    <Footer.img src={Popcorn} alt="poster" />
  </Footer.Footer>
)
