import styled from 'styled-components'

export const SliderParent = styled.div`
  position: relative;
  display: flex;
  height: 91vh;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`

export const SliderTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`

export const SliderWrapper = styled.div<{transform: number}>`
  position: relative;
  display: flex;
  transform: ${props => `translateX(${props.transform}px)`};
  transition: transform 0.2s ease-in-out;
`

export const Welcome = styled.h3`
  text-align: center;
  font-size: 22px;
  margin-top: 50px;
  font-weight: 500;
`

export const Img = styled.div<{src: string}>`
  position: relative;
  transition: 0.4s ease;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 60%;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.23), 0 3px 12px rgba(0, 0, 0, 0.16);
  border-radius: 7px;
  flex-shrink: 0;
`

export const ActiveImg = styled(Img)<{
  active: boolean
  child: number
  key: number
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 345px;
  margin: ${props =>
    props.active ? '0px 100px 0px 100px' : '0px 15px 0px 0px'};
  opacity: 0.5;
  z-index: 4;
`

export const ActiveModal = styled.div`
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
`

export const ModalInfo = styled.div`
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
`

export const Arrow = styled.div`
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
`

export const LeftArrow = styled(Arrow)`
  left: 20px;
`
export const RightArrow = styled(Arrow)`
  right: 20px;
`

export const ModalImg = styled(Img)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 95%;
  z-index: 1;
`

export const ModalTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin: 15px 0px;
  color: #475069;
`

export const ModalLine = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: lightgray;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 10px;
`

export const P = styled.p`
  margin: 0px 5px;
`

export const InfoTitle = styled(P)`
  font-size: 15px;
  font-weight: 400;
  color: gray;
`
export const InfoContent = styled(P)`
  font-size: 15px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.9);
`

export const ModalCenter = styled.div`
  display: flex;
  flex-direction: column;
`

export const ModalBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: auto;
  margin-bottom: 20px;
  width: 100%;
`

export const ModalBottomItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
`

export const ModalBottomContent = styled.span`
  font-weight: 500;
  margin-top: 10px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.9);
`

export const TopOf = styled.div`
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
`

export const ModalTrailer = styled(TopOf)`
  width: 90px;
  height: 90px;
  background-color: #ef606f;
`

export const ModalDownload = styled(TopOf)`
  position: absolute;
  right: -32.5px;
  width: 65px;
  height: 65px;
  bottom: 30px;
  background-color: #3db15a;
  z-index: 3;
`
