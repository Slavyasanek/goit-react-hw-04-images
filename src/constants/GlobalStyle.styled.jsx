import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.mainBcg};
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    color:  ${props => props.theme.fontColor};
    font-size: 20px;
    padding-bottom: 50px;
    overflow: overlay;
    &.lock {
      overflow: hidden;
    }
  }
`
