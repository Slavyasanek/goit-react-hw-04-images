import styled from "styled-components";

export const LoadButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: center;
    gap: 10px;
    margin-top: 30px;
    width: 200px;
    font-size: 20px;
    text-transform: uppercase;
    background-color: ${props => props.theme.decorativeColor};
    border-radius: 5px;
    border: 2px solid ${props => props.theme.decorativeColor};
    color: ${props => props.theme.oddBcg};
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    &:hover,
    &:focus,
    &:active {
      border: 2px solid ${props => props.theme.fontColor};
      color: ${props => props.theme.fontColor};
      & svg {
        fill: ${props => props.theme.fontColor};
      }
    }
    transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
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