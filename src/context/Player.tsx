import { createContext, ReactNode, useContext, useState } from 'react';
import PropTypes from "prop-types";
import { InterfaceLine } from '../types';

interface Player {
    children: ReactNode
}

interface PlayerContextType {
    ofWhichPlayer?: number,
    setOfWichPlayer?: Function,
    winner?: InterfaceLine,
    setWinner?: Function
}

export const PlayerContext = createContext<PlayerContextType>({});

const PlayerProvider = (props: Player) => {
    const [ofWhichPlayer, setOfWichPlayer] = useState(1);

    const [winner, setWinner] = useState<InterfaceLine>();
    

    return (
        <PlayerContext.Provider value={
            {
                ofWhichPlayer: ofWhichPlayer,
                setOfWichPlayer: setOfWichPlayer,
                winner: winner,
                setWinner: setWinner
            }}>
            {props.children}
        </PlayerContext.Provider>
    );
}

export const usePlayer = () => {
    const context = useContext(PlayerContext);

    const { ofWhichPlayer, setOfWichPlayer, winner, setWinner } = context;

    return { ofWhichPlayer, setOfWichPlayer, winner, setWinner };
}


PlayerProvider.propTypes = {
    children: PropTypes.node,
}

export default PlayerProvider;

