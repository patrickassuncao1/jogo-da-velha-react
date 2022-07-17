import styled from 'styled-components';
import { motion } from "framer-motion";

type SvgType = {
    nonecursorpointer?: string
}

export const SSvg = styled(motion.div) <SvgType>`
    width: 90%;
    height: 90%;
    cursor:${props => props.nonecursorpointer === 'true' ? 'none' : 'pointer'};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    circle,
    rect,
    line {
        stroke-width: 10px;
        stroke-linecap: round;
        fill: transparent;
        width: 100%;
    }

`;


