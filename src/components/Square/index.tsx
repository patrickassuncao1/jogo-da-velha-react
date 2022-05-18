import { MouseEvent, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
//style
import { SSvg } from "../../styles/components/SSvg";


interface Props {
    className: string,
    position: number,
    handlePlayer: (number: number) => number
}

const Square = (props: Props): JSX.Element => {

    const [marked, setMarked] = useState(false);
    const [player, setPlayer] = useState(5);

    const playAnimation = (event: MouseEvent) => {

        if (marked) return

        !marked ? setMarked(true) : event.preventDefault();

        setPlayer(props.handlePlayer(props.position));

    }
    const item = {
        animate: { rotate: 180 }
    }

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => {
            const delay = 0;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 0.5, bounce: 0 },
                    opacity: { delay, duration: 0.01 }
                }
            };
        }
    };


    return (
        <motion.div className={props.className} variants={item}>
            <SSvg onClick={playAnimation} data-value={marked}  >
                {player === 1 ? (
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
                ) : player === 2 ? (
                    <motion.svg
                        width="70"
                        height="70"
                        viewBox="0 0 200 200"
                        initial="hidden"
                        animate="visible"
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

                        />
                    </motion.svg>
                ) : (<div></div>)}

            </SSvg>
        </motion.div>
    );
}

Square.propTypes = {
    className: PropTypes.string,
    handlePlayer: PropTypes.func,
    position: PropTypes.number
}

export default Square;

