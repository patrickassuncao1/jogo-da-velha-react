import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SStart = styled(motion.div)`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    div.field-buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width:370px) {
            flex-direction: column;
        }

        button{
            width: 10rem;
            max-width: 90%;
            height: 3rem;
            border: none;
            font-size: 1.5rem;
            background-color: white;
            box-shadow: 0px 0px 6px 2px rgba(0,0,0,0.2);
            transition: all 0.5s ease;
            
            @media screen and (max-width:370px) {
                    margin-right: 0;
                    margin-bottom: 1rem;
                    width: 18rem;
            }

            &:first-child{
                margin-right: 2rem;
                @media screen and (max-width:370px) {
                    margin-right: 0;
                    margin-bottom: 1rem;
                }
            }
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
      
    }
    div.icons{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        div{
            display: flex;
            align-items: center;
            justify-content: center;
        }
       
        
        h1{
            color: white;
            font-size: 4rem;

            @media screen and (max-width:370px) {
                font-size: 3rem;
            }
            span{
                color: black;
            }
        }
    }

    circle,
    rect,
    line {
        stroke-width: 10px;
        stroke-linecap: round;
        fill: transparent;
        width: 100%;
    }

`