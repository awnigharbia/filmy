import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body[data-theme='light'] {
    --colors-primary: white;
    --colors-secondary: white;
    --colors-search: #eae7e7;
    --colors-text: black;
    --colors-text-secondary: black;
    --colors-modal-title: #475069;
    --colors-icon: black;
  }

  body[data-theme='dark'] {
    --colors-primary: #2C2B37;
    --colors-secondary: #51505D;
    --colors-search: #3E4859;
    --colors-text: white;
    --colors-text-secondary: #ABA9BB;
    --colors-modal-title: white;
    --colors-icon: white;
  }  
`
