import React, { Component } from "react";
import { imgs } from "./constants";
import SliderChildren from "./slider";

export default class Slider extends Component {
  state = {
    imgs: imgs,
    activeIndex: 2,
    translateValue: 0
  };

  nextImg = () => {
    this.setState(
      prevState =>
        prevState.activeIndex === imgs.length - 1
          ? {
              activeIndex: 2,
              translateValue: 0
            }
          : {
              activeIndex: prevState.activeIndex + 1,
              translateValue: prevState.translateValue - 250
            },
      () => this.changeActive(this.state.activeIndex)
    );
  };

  backImg = () =>
    this.setState(
      prevState =>
        prevState.activeIndex === 0
          ? null
          : {
              activeIndex: prevState.activeIndex - 1,
              translateValue: prevState.translateValue + 250
            },

      () => this.changeActive(this.state.activeIndex)
    );

  changeActive = id => {
    imgs[id].active = true;
    imgs.filter((x, key) => key !== id).map(x => (x.active = false));
    this.setState({ imgs: imgs, activeIndex: id });
  };

  handleArrow = e => {
    return e.keyCode === 39
      ? this.nextImg()
      : e.keyCode === 37
        ? this.backImg()
        : null;
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleArrow, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleArrow, false);
  }

  render() {
    return <SliderChildren {...this} {...this.state} />;
  }
}
