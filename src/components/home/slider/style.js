import styled from "styled-components";

const SliderParent = styled.div`
  position: relative;
  display: flex;
  height: 91vh;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const sliderTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  transform: ${props => `translateX(${props.transform}px)`};
  transition: transform 0.2s ease-in-out;
`;

const welcome = styled.h3`
  text-align: center;
  font-size: 22px;
  margin-top: 50px;
  font-weight: 500;
`;

const img = styled.div`
  position: relative;
  transition: 0.4s ease;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 60%;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.23), 0 3px 12px rgba(0, 0, 0, 0.16);
  border-radius: 7px;
  flex-shrink: 0;
`;

const ActiveImg = styled(img)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 345px;
  margin: ${props =>
    props.active ? "0px 100px 0px 100px" : "0px 15px 0px 0px"};
  opacity: 0.5;
  z-index: 4;
`;

const activeModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 80%;
  margin: auto;
  z-index: 3;
`;

const modalInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  height: 90%;
  flex-shrink: 0;
  background-color: white;
  box-shadow: 0 0px 12px rgba(0, 0, 0, 0.11), 0 10px 40px rgba(0, 0, 0, 0.19);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const arrow = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 100px;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
  color: rgba(0, 0, 0, 0.7);
  z-index: 4;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.23), 0 10px 40px rgba(0, 0, 0, 0.19);
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background-color: white;
  }
`;

const leftArrow = styled(arrow)`
  left: 20px;
`;
const rightArrow = styled(arrow)`
  right: 20px;
`;

const modalImg = styled(img)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 95%;
  z-index: 1;
`;

const modalTitle = styled.h3`
  font-size: 22px;
  font-weight: 400;
  margin: 15px 0px;
  color: #475069;
`;

const modalLine = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: lightgray;
`;

const infoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 10px;
`;

const p = styled.p`
  margin: 0px 5px;
`;

const infoTitle = styled(p)`
  font-size: 15px;
  font-weight: 400;
  color: gray;
`;
const infoContent = styled(p)`
  font-size: 15px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.9);
`;

const modalCenter = styled.div`
  display: flex;
  flex-direction: column;
`;

const modalBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: auto;
  margin-bottom: 20px;
  width: 100%;
`;

const modalBottomItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
`;

const modalBottomContent = styled.span`
  font-weight: 500;
  margin-top: 10px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.9);
`;

const topOf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.23), 0 10px 40px rgba(0, 0, 0, 0.19);
  color: white;
  border-radius: 50%;

  &:hover {
    transform: scale(1.05);
  }
`;

const modalTrailer = styled(topOf)`
  width: 90px;
  height: 90px;
  background-color: #ef606f;
`;

const modalDownload = styled(topOf)`
  position: absolute;
  right: -32.5px;
  width: 65px;
  height: 65px;
  bottom: 30px;
  background-color: #3db15a;
  z-index: 3;
`;

// Slider
SliderParent.top = sliderTop;
SliderParent.wrapper = SliderWrapper;
SliderParent.img = ActiveImg;
SliderParent.title = welcome;
SliderParent.leftArrow = leftArrow;
SliderParent.rightArrow = rightArrow;

// Modal
SliderParent.modal = activeModal;
SliderParent.modal.img = modalImg;
SliderParent.modal.info = modalInfo;
SliderParent.modal.trailer = modalTrailer;
SliderParent.modal.title = modalTitle;
SliderParent.modal.download = modalDownload;
SliderParent.modal.line = modalLine;
SliderParent.modal.center = modalCenter;
SliderParent.modal.bottom = modalBottom;
SliderParent.modal.bottom.item = modalBottomItem;
SliderParent.modal.bottom.content = modalBottomContent;
SliderParent.modal.info.title = infoTitle;
SliderParent.modal.info.content = infoContent;
SliderParent.modal.info.wrapper = infoWrapper;

export { SliderParent };
