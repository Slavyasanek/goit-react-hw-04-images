import styled from "styled-components";
import { motion} from "framer-motion";

export const Item = styled(motion.li)`
    width: calc((100% - 4 * 10px) / 2);
    height: 120px;
  @media screen and (min-width: 760px) {
    width: calc((100% - 6 * 10px) / 3);
    height: 170px;
  }
  @media screen and (min-width: 1200px) {
    width: calc((100% - 8 * 10px) / 4);
    height: 217px;
  }
  margin: 10px;
  border-radius: 5px;
  /* transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1); */
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0px 9px 20px 3px rgba(204, 168, 207, 1);
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    transform: scale(1.06);
  }
`

export const ImageWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 5px;
    border: 2px solid ${props => props.theme.bcgText};
`

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    object-position: center;
`