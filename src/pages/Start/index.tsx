import { Variants, motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import O from '../../components/PlayersXO/O';
import X from '../../components/PlayersXO/X';
import { SStart } from '../../styles/pages/Start';

// import { Container } from './styles';

const Start: React.FC = () => {

    const navigate = useNavigate();
    const fadeInUp: Variants = {
        initial: {
            y: 40,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }

    }

    const staggerContainer: Variants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.5,
                delayChildren: 0.7
            }
        }
    }

    return (
        <SStart
            variants={staggerContainer}
            initial="initial"
            animate="animate"
        >
            <div>
                <div className='icons'>
                    <motion.div
                        variants={fadeInUp}
                    >
                        <X />
                        <O />
                    </motion.div>
                    <motion.h1
                        variants={fadeInUp}
                    >
                        JOGO DA <span>VELHA</span>
                    </motion.h1>
                </div>

                <motion.div className='field-buttons' variants={fadeInUp}>
                    <button onClick={() => navigate('/game')}>
                        Jogar
                    </button>
                    <button onClick={() => navigate('/multiplayer')}>
                        Multiplayer
                    </button>
                </motion.div>
            </div>
        </SStart>
    )
}

export default Start;