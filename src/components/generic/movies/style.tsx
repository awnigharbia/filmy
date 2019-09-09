import styled from 'styled-components'

export const Movies = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px 40px;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-evenly;
`

export const ImageStyle = styled.div<{ src: string }>`
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

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  flex-wrap: wrap;
  width: 200px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
`

export const Movie = styled(ImageStyle)`
  height: 280px;
  width: 95%;
`

export const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  opacity: 0;
  transition: 0.2s ease-in-out;

  ${MovieWrapper}:hover & {
    opacity: 1;
  }
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`

export const BottomDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.2em 0.4em;
  font-size: 0.85em;
  color: ${props => props.color || '#fec72a'};
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  transition: 0.2s ease-in-out;

  ${MovieWrapper}:hover & {
    transform: translateY(-15px);
  }
`

export const Details = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  word-break: break-all;
  font-weight: 400;
  align-items: flex-start;
`

export const Name = styled.p`
  font-size: 13.5px;
  margin: 0px 0px 10px 0px;
  background-color: gray;
  border-radius: 25px;
  color: white;
  font-weight: 500;
  padding: 3px 10px;
  transition: 0.2s ease-in-out;

  ${MovieWrapper}:hover & {
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const GenreYear = styled.p`
  color: gray;
  font-size: 13px;
  font-weight: 400;
  margin: 10px 0px 5px 0px;
`

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0px 20px;
  background-color: #f7f7f7;
`

export const FilterSpan = styled.span`
  font-size: 12px;
  letter-spacing: 1.7px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
`
export const Loader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
`

