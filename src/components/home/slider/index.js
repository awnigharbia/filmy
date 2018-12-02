import React, {Component} from 'react'
import SliderChildren from './slider'

export default class Slider extends Component {
  state = {
    activeIndex: 2,
    translateValue: 0,
  }

  nextImg = () => {
    const {movies} = this.props

    this.setState(
      prevState =>
        prevState.activeIndex === movies.length - 1
          ? {
              activeIndex: 2,
              translateValue: 0,
            }
          : {
              activeIndex: prevState.activeIndex + 1,
              translateValue: prevState.translateValue - 250,
            },
      () => this.changeActive(this.state.activeIndex),
    )
  }

  backImg = () =>
    this.setState(
      prevState =>
        prevState.activeIndex === 0
          ? null
          : {
              activeIndex: prevState.activeIndex - 1,
              translateValue: prevState.translateValue + 250,
            },

      () => this.changeActive(this.state.activeIndex),
    )

  changeActive = id => this.setState({activeIndex: id})

  handleArrow = e => {
    return e.keyCode === 39
      ? this.nextImg()
      : e.keyCode === 37
      ? this.backImg()
      : null
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleArrow, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleArrow, false)
  }

  render() {
    return this.props.loading ? null : (
      <SliderChildren {...this} {...this.state} {...this.props} />
    )
  }
}
