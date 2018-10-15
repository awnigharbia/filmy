import React from "react";
import { SliderParent } from "./style";
import { Icon } from "react-icons-kit";
import { star, play } from "react-icons-kit/fa/";
import { globe, video } from "react-icons-kit/feather";
import { downloadCloud } from "react-icons-kit/feather";

const Info = ({ title, content }) => (
  <SliderParent.modal.info.wrapper>
    <SliderParent.modal.info.title>{title}</SliderParent.modal.info.title>
    <SliderParent.modal.info.content>{content}</SliderParent.modal.info.content>
  </SliderParent.modal.info.wrapper>
);

export default ({ imgs, activeIndex }) => (
  <SliderParent.modal>
    <SliderParent.modal.img src={imgs[activeIndex].src}>
      <SliderParent.modal.trailer>
        <Icon icon={play} size={30} />
        Watch <br /> Trailer
      </SliderParent.modal.trailer>
    </SliderParent.modal.img>
    <SliderParent.modal.info>
      <SliderParent.modal.title>
        {imgs[activeIndex].name}
      </SliderParent.modal.title>
      <SliderParent.modal.line />
      <Info title="Release Date" content="June 17, 2018" />
      <Info title="Genre" content="Fantasy, Fiction" />
      <Info
        title="Synopsis"
        content="The Easter Bunny looking for the best Easter Egg, on his way to find it, he runs into friends and they tell him different fables."
      />
      <SliderParent.modal.center />
      <SliderParent.modal.bottom>
        <SliderParent.modal.bottom.item color="#fec72a">
          <Icon icon={star} size={30} />
          <SliderParent.modal.bottom.content>
            7/10
          </SliderParent.modal.bottom.content>
        </SliderParent.modal.bottom.item>

        <SliderParent.modal.bottom.item color="#2091EB">
          <Icon icon={globe} size={30} />
          <SliderParent.modal.bottom.content>
            English
          </SliderParent.modal.bottom.content>
        </SliderParent.modal.bottom.item>

        <SliderParent.modal.bottom.item color="#4FBA6F">
          <Icon icon={video} size={30} />
          <SliderParent.modal.bottom.content>
            1080p
          </SliderParent.modal.bottom.content>
        </SliderParent.modal.bottom.item>
      </SliderParent.modal.bottom>
      <SliderParent.modal.download>
        <Icon icon={downloadCloud} size={30} />
      </SliderParent.modal.download>
    </SliderParent.modal.info>
  </SliderParent.modal>
);
