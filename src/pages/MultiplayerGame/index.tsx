import React, { useEffect, useState } from 'react';
import Panel from '../../components/Panel';
import Square from '../../components/Square';
import WinnerScreen from '../../components/WinnerScreen';
import { usePlayer } from '../../context/Player';
import { initialPlayerMoves } from '../../data';
import { Line } from '../../styles/components/Line';
import { GameDiv } from '../../styles/pages/Game';
import { PlayersMoves } from '../../types';
import { currentPlayerMoves, ifItTied, pointChecking } from '../../utils';

var playerMoves: PlayersMoves[] = initialPlayerMoves

const MultiplayerGame: React.FC = () => {

    const { ofWhichPlayer, setOfWichPlayer, winner, setWinner, restart, } = usePlayer();
    const [tied, setTied] = useState(false);

    useEffect(() => {
        if (restart) {
            playerMoves = initialPlayerMoves;
            setTied(false);
        }
    }, [restart])


    const WinnerPlayer = () => {
        const whichPlayer = ofWhichPlayer ? ofWhichPlayer : 5;
        const currentPlayerMovement = currentPlayerMoves(playerMoves, whichPlayer)
        const winningPlayer = pointChecking(currentPlayerMovement, whichPlayer);

        if (setWinner && winningPlayer?.numbers.length === 3) {
            setWinner({ ...winningPlayer?.styles, color: winningPlayer?.color })

        } else {
            const numberOfAttempts = ifItTied(playerMoves);
            if (numberOfAttempts === 9) {
                setTied(true);
            }
        }

    }

    const scorePoints = (newBoardPosition: number) => {
        const newPlayerMoves = playerMoves.map(repo => {
            return repo.player === ofWhichPlayer ? {
                ...repo, boardPositions: [
                    ...repo.boardPositions,
                    newBoardPosition
                ]
            } : repo;
        })

        playerMoves = newPlayerMoves;

        WinnerPlayer();
    }

    const handlePlayer = (number: number) => {

        scorePoints(number);
        const currentPlayer = ofWhichPlayer ? ofWhichPlayer : 1;

        const player = ofWhichPlayer && ofWhichPlayer === 1 ? 2 : 1;

        setOfWichPlayer && setOfWichPlayer(player);

        return currentPlayer;
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5
            }
        }
    }

    return (
        <GameDiv
            variants={container}
            initial="hidden"
            animate="show"
        >
            <Panel
                ofWhichPlayer={ofWhichPlayer}
                winner={winner ? true : false}
                tied={tied}
            />
            <div className='content-lines' >
                {winner && (
                    <Line
                        top={winner.top}
                        rotate={winner.rotate}
                        left={winner.left}
                        width={winner.width}
                        color={winner.color}>  {/* background color */}

                        <hr />
                    </Line>
                )}
                {/* primeira linha */}
                <Square
                    position={1}
                    className='border-2'
                    handlePlayer={handlePlayer}
                />
                <Square
                    position={2}
                    className=''
                    handlePlayer={handlePlayer}
                />
                <Square
                    position={3}
                    className='border-3'
                    handlePlayer={handlePlayer}
                />

                {/* Segunda linha */}
                <Square
                    position={4}
                    className='border border-2'
                    handlePlayer={handlePlayer}
                />
                <Square
                    position={5}
                    className='border'
                    handlePlayer={handlePlayer}
                />
                <Square
                    position={6}
                    className='border border-3'
                    handlePlayer={handlePlayer}
                />

                {/* Terceira Linha */}
                <Square
                    position={7}
                    className='border-2'
                    handlePlayer={handlePlayer}
                />
                <Square
                    position={8}
                    className=''
                    handlePlayer={handlePlayer}
                />
                <Square
                    position={9}
                    className='border-3'
                    handlePlayer={handlePlayer}
                />
            </div>
            {(winner || tied) && (
                <WinnerScreen ofWhichPlayer={
                    tied ? 5 :
                        ofWhichPlayer === 1 ? 2 : 1
                }
                />
            )}
        </GameDiv>
    )
}

export default MultiplayerGame;