import { motion } from "framer-motion";

const PlayersIcon = ({ player }: { player: number }) => {

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
        <>
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
            ) : (<div></div>)}
        </>

    )
}

export default PlayersIcon;