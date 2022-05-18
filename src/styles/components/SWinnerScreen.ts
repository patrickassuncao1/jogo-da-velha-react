import { motion } from 'framer-motion';
import styled from 'styled-components';

interface WinnerScreenType {
    colorSpan: "white" | "black"
}

export const SwinnerScreen = styled(motion.div)<WinnerScreenType>`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color:${props => props.theme.colors.backgroundWinner} ;
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 0.2;

    span{
        font-size: 4rem;
        color:  ${props => props.colorSpan};
    }
`;