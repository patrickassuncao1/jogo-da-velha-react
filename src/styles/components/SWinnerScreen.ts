import { motion } from 'framer-motion';
import styled from 'styled-components';

interface WinnerScreenType {
    colorSpan: "white" | "black"
}

export const SwinnerScreen = styled(motion.div) <WinnerScreenType>`
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
    button{
        width: 18rem;
        max-width: 90%;
        height: 3rem;
        border: none;
        font-size: 1.5rem;
        background-color: white;
        box-shadow: 0px 0px 6px 2px rgba(0,0,0,0.2);
        transition: all 0.5s ease;
        
        &:hover{
            background-color: ${props => props.theme.colors.background};
            color: white;
            letter-spacing: 0.1rem;
            cursor: pointer;
        }

        &:active{
            background-color: white;
        }

    }
`;

export const TiedTextElements = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    



`