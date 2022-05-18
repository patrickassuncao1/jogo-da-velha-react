
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const GameDiv = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: relative;

    div.content-lines{
      display: grid;
      justify-content: center;
      width: 500px;
      max-width: 100%;
      grid-template-columns: 0.23fr 0.2fr 0.23fr ;
      grid-template-rows: 90px 130px 90px;
      position: relative;

      div{
          display: flex;
          align-items: center;
          justify-content: center;
      }

      .border{
          border-bottom: 15px solid rgba(0,0,0,0.5);
          border-top: 15px solid rgba(0,0,0,0.5) ;

      }

      .border-2{
          border-right: 15px solid rgba(0,0,0,0.5);
      }
      .border-3{
          border-left: 15px solid rgba(0,0,0,0.5);
      }

      
    }

`;
