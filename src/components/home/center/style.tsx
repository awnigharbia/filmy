import styled from 'styled-components'
import {Link} from '../../Link'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #f8f9fb;
`

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04), 0 0px 0px rgba(0, 0, 0, 0);
`

export const H1 = styled.h1`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 500;
`

export const TopCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 22px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
`

export const DiscoverBtn = styled(Link)`
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: center;
  padding: 8px 15px;
  outline: none;
  border-radius: 20px;
  background-color: #926dde;
  color: white;
  font-size: 12px;
  letter-spacing: 1.7px;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  border: none;
  box-shadow: 0 1px 10px rgba(146, 109, 222, 0.5);
  transition: 0.2s ease;

  &:hover {
    color: #926dde;
    background-color: white;
  }
`
