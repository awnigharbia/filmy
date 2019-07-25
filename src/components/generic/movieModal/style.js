import styled, {keyframes, css} from 'styled-components'
import posed from 'react-pose'

// configure animation `react-pose`
const content = posed.div({
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

const modal = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
})

const pulse = keyframes`
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

const Modal = styled(modal)`
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

const ModalContent = styled(content)`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: white;
  max-width: 100%;
  margin-top: auto;
  flex-shrink: 0;
  min-height: 70%;
  padding: 10px 40px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`

const close = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 50%;
  margin: 1%;
  color: rgba(255, 255, 255, 1);
  transition: 0.2s ease-in-out;
  margin-left: auto;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`

const leftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 1;
  flex-grow: 0;
  justify-content: space-evenly;
  flex: 0.8;
`

const img = styled.img`
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

const name = styled.h2`
  font-weight: 500;
  font-size: 22px;
  margin: 0;
  color: rgba(0, 0, 0, 0.85);
`

const socialShare = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`

const center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  flex-grow: 1;
`

const category = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
`

const catTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
`

const catBody = styled.p`
  font-size: 13px;
  margin: 0;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.7);
`

const catGenres = styled.ul`
  margin: 0;
  line-height: 1.5;
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
`

const bio = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
`

const right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  flex-grow: 1;
  padding: 20px 0px 0px 40px;
`

const qualities = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const selectQuality = styled.select`
  width: 100%;
  flex-shrink: 0;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  border: 1px solid rgba(146, 109, 222, 0.5);
  box-shadow: 0 1px 10px rgba(146, 109, 222, 0.5);
`

const download = styled.a`
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

const downloadBtn = styled.div`
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

const icon = styled.div`
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

Modal.content = ModalContent
Modal.close = close
Modal.left = leftSection
Modal.img = img
Modal.name = name
Modal.social = socialShare
Modal.center = center
Modal.right = right
Modal.right.download = download
Modal.right.download.btn = downloadBtn
Modal.right.download.icon = icon
Modal.right.qualities = qualities
Modal.right.select = selectQuality
Modal.center.category = category
Modal.center.category.title = catTitle
Modal.center.category.body = catBody
Modal.center.category.genres = catGenres
Modal.bio = bio

export {Modal}
