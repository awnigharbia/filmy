import styled from "styled-components";

const WlcSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  min-height: 50vh;
  width: 100%;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04), 0 0px 0px rgba(0, 0, 0, 0);
`;

const leftVideo = styled.video`
  width: 50%;
  height: 100%;
`;

const rightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
`;

const rightText = styled.p`
  font-size: 1.8em;
  font-weight: 500;
  width: 70%;
`;

WlcSection.video = leftVideo;
WlcSection.right = rightSide;
WlcSection.right.text = rightText;

export { WlcSection };
