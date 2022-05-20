import React from 'react';
import { motion } from "framer-motion";


const O: React.FC = () => {

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
            viewBox="0 0 200 200"
            initial="hidden"
            animate="visible"
            color="rgb(84, 84, 84)"
        >
            <motion.circle
                cx="100"
                cy="100"
                r="80"
                stroke="black"
                variants={draw}
                custom={1}
                strokeDashoffset="0px"
                strokeDasharray="1px 1px"
                color="rgb(84, 84, 84)"

            />
        </motion.svg>
    );
}

export default O;