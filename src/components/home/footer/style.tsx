import styled from 'styled-components'

export const Footer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 40vh;
  background-color: var(--colors-primary);
`

export const text = styled.p`
  font-size: 1.5em;
  font-weight: 500;
  margin: auto;
  color: var(--colors-text);
`

export const author = styled.span`
  padding: 5px 10px;
  background-color: var(--colors-primary);
  box-shadow: 0px 1px 9px #d4dce4;
  border-radius: 25px;
`

export const img = styled.img`
  width: 100px;
`
