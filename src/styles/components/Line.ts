import styled from 'styled-components';
import { InterfaceLine } from '../../types';


export const Line = styled.div<InterfaceLine>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    top: ${props => props.top};
    z-index: 2;
    transform: rotate(${props => props.rotate});
    left: ${props => props.left};
  

    hr{
        width: ${props => props.width};
        height: 10px;
        border: none;
        border-radius:30px;
        
        &::after {
            content: "";
            display: block;
            height: inherit;
            background:${props => props.color};
            border-radius: 20px;
            transform: translate(-100%);
            animation: thumb 0.5s linear 0s 1 forwards;
        }
    
    }

    @-webkit-keyframes thumb {
        to {
            transform: initial;
        }
    }

    @keyframes thumb {
        to {
            transform: initial;
        }
    }


`;

