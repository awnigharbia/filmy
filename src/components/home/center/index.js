import React, {Component} from 'react'
import {Wrapper} from './style'
import TopHeader from './topHeader'
import MoviesPanel from 'generic/movies/movies'

export default class Center extends Component {
  render() {
    return (
      <Wrapper>
        <TopHeader {...this.state} {...this} />
        <MoviesPanel
          loading={this.props.loading}
          movies={this.props.movies}
          loader={false}
        />
      </Wrapper>
    )
  }
}
