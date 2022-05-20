import React from 'react';
import { motion } from "framer-motion";

// import { Container } from './styles';

const X: React.FC = () => {

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => {
            const delay = 0;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 0.5, bounce: 0 },
                    opacity: { delay, duration: 0.01 },
                }
            };
        }
    };

    return (
        <motion.svg
            width="70"
            height="70"
            viewBox="250 0 100 200"
            initial="hidden"
            animate="visible"
        >
            <motion.line
                x1="220"
                y1="30"
                x2="360"
                y2="170"
                stroke="white"
                variants={draw}
                custom={2}

            />
            <motion.line
                x1="220"
                y1="170"
                x2="360"
                y2="30"
                stroke="white"
                variants={draw}
                custom={2.5}
            />
        </motion.svg>
    );
}

export default X;