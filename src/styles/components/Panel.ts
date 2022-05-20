import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SPanel = styled(motion.div)`
    position: absolute;
    top: 8%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    div{
        width: 100%; 
        display: flex;
        align-items: center;
        justify-content: center;

        article{
            width: 10rem;
            max-width: 50%;
            height: 3rem;
            background-color: ${props => props.theme.colors.background};
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 1rem 0 1rem;
            -webkit-box-shadow: 0.8px 0px 3px 0px white;
            -moz-box-shadow: 0.8px 0px 3px 0px white;
            box-shadow: 0.8px 0px 3px 0px white;
            span{
                font-size: 1.5rem;
            }
            &:first-child{
                color: white;
            }
            &:last-child{
                margin-left: 1rem;
            }
        }
    }

    p{
        margin-top: 1rem;
        font-weight: bold;

        span{
            margin-left:0.5rem;
        }
    }
   

`