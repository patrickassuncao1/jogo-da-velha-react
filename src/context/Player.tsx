import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { InterfaceLine } from '../types';

interface Player {
    children: ReactNode
}

interface VictoryCountType {
    playerX: number,
    playerO: number
}
interface PlayerContextType {
    ofWhichPlayer?: number,
    setOfWichPlayer?: Function,
    winner?: InterfaceLine,
    setWinner?: Function,
    stopGame?: () => void,
    restart?: boolean,
    victoryCount?: VictoryCountType,
    setVictoryCount?: Function
}

export const PlayerContext = createContext<PlayerContextType>({});

const PlayerProvider = (props: Player) => {
    const [ofWhichPlayer, setOfWichPlayer] = useState(1);
    const [winner, setWinner] = useState<InterfaceLine>();
    const [restart, setRestart] = useState(false);
    const [victoryCount, setVictoryCount] = useState({
        playerX: 0,
        playerO: 0
    })

    useEffect(() => {
        if (restart) {
            setWinner(undefined);
            setOfWichPlayer(1);
        }
    }, [restart])

    useEffect(() => {
        if (!winner) {
            setRestart(false);
        }
    }, [winner])

    const stopGame = () => {
        setRestart(true);
    }



    return (
        <PlayerContext.Provider value={
            {
                ofWhichPlayer: ofWhichPlayer,
                setOfWichPlayer: setOfWichPlayer,
                winner: winner,
                setWinner: setWinner,
                stopGame: stopGame,
                restart: restart,
                victoryCount: victoryCount,
                setVictoryCount: setVictoryCount
            }}>
            {props.children}
        </PlayerContext.Provider>
    );
}

export const usePlayer = () => {
    const context = useContext(PlayerContext);
    const {
        ofWhichPlayer,
        setOfWichPlayer,
        winner,
        setWinner,
        stopGame,
        restart,
        victoryCount,
        setVictoryCount
    } = context;

    return {
        ofWhichPlayer,
        setOfWichPlayer,
        winner,
        setWinner,
        stopGame,
        restart,
        victoryCount,
        setVictoryCount
    };
}


PlayerProvider.propTypes = {
    children: PropTypes.node,
}

export default PlayerProvider;

