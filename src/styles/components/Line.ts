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
            width: ${props => props.width};
            border-radius: 20px;
            animation: thumb 0.3s linear 0s 1 forwards;
        }
    
    }

    @-webkit-keyframes thumb {
        from{
            width: 0;
        }
        to {
            transform: initial;
            width: 100%;
        }
    }

    @keyframes thumb {
        from{
           width: 0;
        }
        to {
            transform: initial;
            width: 100%;
        }
    }


`;

