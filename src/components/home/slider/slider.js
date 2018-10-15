import React from "react";
import { SliderParent } from "./style";
import SliderModal from "./sliderModal";

export default ({ translateValue, backImg, imgs, activeIndex, nextImg }) => (
  <>
    <SliderParent>
      <SliderParent.title>Your weekend buddy for this week</SliderParent.title>
      <SliderParent.top>
        <SliderParent.wrapper transform={translateValue}>
          {imgs.map((item, key) => (
            <SliderParent.img
              src={item.src}
              child={activeIndex}
              active={item.active}
              key={key}
            />
          ))}
        </SliderParent.wrapper>
        <SliderModal imgs={imgs} activeIndex={activeIndex} />
      </SliderParent.top>
      <SliderParent.leftArrow onClick={backImg}>
        <SliderParent.arrowImg
          src="https://cdn.shopify.com/s/files/1/1061/1924/files/Left_Pointing_Backhand_Index_Emoji_Icon_ios10.png?9057686143853941278"
          alt="r"
        />
      </SliderParent.leftArrow>
      <SliderParent.rightArrow onClick={nextImg}>
        <SliderParent.arrowImg
          src="https://cdn.shopify.com/s/files/1/1061/1924/files/Right_Pointing_Backhand_Index_Emoji_Icon_ios10.png?9057686143853941278"
          alt="r"
        />
      </SliderParent.rightArrow>
    </SliderParent>
  </>
);
