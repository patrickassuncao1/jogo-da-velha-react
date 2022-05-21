import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
//style
import { SSvg } from "../../styles/components/SSvg";
import PlayersIcon from "../PlayersIcon";
import { usePlayer } from "../../context/Player";


interface Props {
    className: string,
    position: number,
    handlePlayer: (number: number) => number,
    stopGame?: boolean,
    positionSquale?: boolean,
    stopPlayer?: boolean
}

const Square = (props: Props): JSX.Element => {

    const [marked, setMarked] = useState(false);
    const [player, setPlayer] = useState(5);
    const {restart} = usePlayer()

    useEffect(() => {
        if(restart){
            setMarked(false);
            setPlayer(5);
        } 
    },[restart])

    useEffect(() => {
        if (props.positionSquale && !props.stopGame) playAnimation();

    }, [props.positionSquale]) // eslint-disable-line

    const playAnimation = () => {

        if (marked) return

        !marked && setMarked(true);

        setPlayer(props.handlePlayer(props.position));

    }
    const item = {
        animate: { rotate: 180 }
    }



    return (
        <motion.div className={props.className} variants={item}>
            <SSvg
                onClick={!props.stopPlayer
                    ? playAnimation
                    : () => console.log('sua vez')}
            >
                <PlayersIcon player={player} />
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

