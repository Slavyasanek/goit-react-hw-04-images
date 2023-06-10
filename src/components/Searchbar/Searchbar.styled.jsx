import styled from "styled-components";

export const Header = styled.header`
background-color: ${props => props.theme.pink};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 20px;
  z-index: 999;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  min-width: 320px;
  @media screen and (min-width: 1200px) {
    padding-top: 20px; 
  }
`

export const SearchForm = styled.form`
     display: flex;
    align-items: center;
    gap: 5px;
`

export const SearchBtn = styled.button`
    background-color: ${props => props.theme.decorativeColor};
    border-radius: 5px;
    border: 2px solid ${props => props.theme.decorativeColor};
    padding: 4px;
    transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    &:hover,
    &:focus,
    &:active {
      border: 2px solid ${props => props.theme.fontColor};
      & svg {
        fill: ${props => props.theme.fontColor};
      }
    }
    @media screen and (min-width: 760px) {
    padding: 10px;
  }
  & svg {
    fill: ${props => props.theme.oddBcg};
    display: block;
    width: 20px;
    height: 20px;
    transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    @media screen and (min-width: 760px) {
      width: 30px;
      height: 30px;
    }
  }
`

export const SearchInput = styled.input`
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
    border: 3px solid ${props => props.theme.decorativeColor};
    border-radius: 5px;
    outline: none;
    color: ${props => props.theme.lightFontColor};
    width: 200px;
    font-size: 20px;
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    @media screen and (min-width: 760px) {
      width: 100%;
      height: 54px;
    }
`