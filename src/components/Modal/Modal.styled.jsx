import styled from "styled-components";
import { motion} from "framer-motion";

export const Overlay = styled(motion.div)`
position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  min-width: 320px;
  background-color: rgba(41, 48, 61, 0.4);
  backdrop-filter: blur(2px);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`

export const ModalWrapper = styled(motion.div)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: max-content;
    min-width: 320px;
    height: 200px;
    background-color: ${props => props.theme.mainBcg};
    border-radius: 5px;
    display: flex;
    padding: 10px;
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    @media screen and (min-width: 760px) {
      /* min-width: 760px; */
      height: 400px;
    }
    @media screen and (min-width: 1200px) {
      /* min-width: 1000px; */
      height: 600px;
    }
`

export const ModalImage = styled.img`
  object-fit: contain;
  object-position: top;
  width: 100%;
  height: auto;
`