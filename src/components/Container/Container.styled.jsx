import styled from "styled-components"

export const Wrapper = styled.div`
    padding-top: 110px;
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    min-width: 320px;
    @media screen and (min-width: 760px) {
    padding-top: 130px;
      max-width: 760px;
    }
    @media screen and (min-width: 1200px) {
      max-width: 1200px;
    }
`