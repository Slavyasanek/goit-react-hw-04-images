import styled from "styled-components";

export const TextWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background-color: ${props => props.theme.decorativeColor};
    color: ${props => props.theme.oddBcg};
    border-radius: 5px;
    padding: 10px;
    min-width: 190px;
    & svg {
        fill: ${props => props.theme.oddBcg};
        width: 40px;
        height: 40px;
    }
`