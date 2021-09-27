import styled, {keyframes, css} from 'styled-components'
import posed from 'react-pose'

// configure animation `react-pose`
export const Content = posed.div({
  enter: {
    y: '0%',
    staggerChildren: 50,
    transition: {
      type: 'spring',
      damping: 20,
    },
  },
  exit: {
    y: '120%',
  },
})

export const ModalKeyframes = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
})

export const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(17, 183, 25,0.7), 0 0 0 0 rgba(17, 183, 25,0.7);
  }
  40% {
    box-shadow: 0 0 0 10px rgba(17, 183, 25,0), 0 0 0 0px rgba(17, 183, 25,0.7); 
  }
  80% {
    box-shadow: 0 0 0 10px rgba(17, 183, 25,0), 0 0 0 10px rgba(17, 183, 25,0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(17, 183, 25,0.7), 0 0 0 10px rgba(17, 183, 25,0);
  }
`

export const Modal = styled(ModalKeyframes)`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  transition: 0.2s ease;
`

export const ModalContent = styled(Content)`
  position: relative;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  background-color: var(--colors-primary);
  max-width: 100%;
  margin-top: auto;
  flex-shrink: 0;
  min-height: 70%;
  padding: 10px 40px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  @media only screen and (min-width: 320px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`

export const Close = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 50%;
  margin: 1%;
  color: rgba(255, 255, 255, 1);
  transition: 0.2s ease-in-out;
  margin-left: auto;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 1;
  flex-grow: 0;
  justify-content: space-evenly;
  flex: 0.8;
`

export const Img = styled.img`
  margin-top: -50%;
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 3px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: 0.2s ease-in;
  z-index: 4;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

export const Name = styled.h2`
  font-weight: 500;
  font-size: 22px;
  margin: 0;
  color: var(--colors-text);
`

export const SocialShare = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  flex-grow: 1;
`

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
`

export const CatTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  line-height: 1.5;
  color: var(--colors-text);
`

export const CatBody = styled.p`
  font-size: 13px;
  margin: 0;
  line-height: 1.5;
  color: var(--colors-text-secondary);
`

export const CatGenres = styled.ul`
  margin: 0;
  line-height: 1.5;
  font-size: 14px;
  font-weight: 500;
  color: var(--colors-text-secondary);
`

export const bio = styled.div`
  font-size: 16px;
  color: var(--colors-text-secondary);
  font-weight: 500;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  flex-grow: 1;
  padding: 20px 0px 0px 40px;
`

export const Qualities = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const SelectQuality = styled.select`
  width: 100%;
  flex-shrink: 0;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  border: 1px solid rgba(146, 109, 222, 0.5);
  box-shadow: 0 1px 10px rgba(146, 109, 222, 0.5);
`

export const Download = styled.a<{color: string; animate: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  border-radius: 3px;
  overflow: hidden;
  opacity: 1;
  animation: ${props =>
    props.animate &&
    css`
      ${pulse} 3s linear infinite
    `};
  transition: 0.2s ease-in-out;
  margin-top: 10px;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`

export const DownloadBtn = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  border: none;
  color: white;
  font-size: 16px;
  letter-spacing: 1.7px;
  margin-right: auto;
  font-family: 'Open Sans', sans-serif;
  background-color: transparent;
`

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  color: white;
  margin-right: auto;
  padding: 6px 10px;
  background-color: ${props => props.color || 'inherit'};
`
