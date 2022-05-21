import React, { useEffect, useState } from 'react';
import Panel from '../../components/Panel';
import Square from '../../components/Square';
import WinnerScreen from '../../components/WinnerScreen';
import { usePlayer } from '../../context/Player';
import { initialPlayerMoves, initialValue } from '../../data';
import { Line } from '../../styles/components/Line';
import { GameDiv } from '../../styles/pages/Game';
import { PlayersMoves } from '../../types';
import { currentPlayerMoves, ifItTied, pointChecking, botMovement } from '../../utils';

var playerMoves: PlayersMoves[] = initialPlayerMoves;

const Game: React.FC = () => {

    const { ofWhichPlayer, setOfWichPlayer, winner, setWinner, restart } = usePlayer();
    const [tied, setTied] = useState(false);
    const [stopPlayer, setstopPlayer] = useState(false);
    const [positionSquale, setpositionSquale] = useState(initialValue);

    useEffect(() => {
        if (restart) {
            playerMoves = initialPlayerMoves;
            setpositionSquale(initialValue);
            setTied(false);
            setstopPlayer(false);
        }
    }, [restart])

    useEffect(() => {
        setTimeout(() => {
            if (ofWhichPlayer === 2) {
                const botPlayer = botMovement(playerMoves);
                setpositionSquale({ ...positionSquale, [botPlayer]: true })
            }
        }, 500)
    }, [stopPlayer]) // eslint-disable-line


    useEffect(() => {
        ofWhichPlayer === 2 ? setstopPlayer(true) : setstopPlayer(false);
    }, [ofWhichPlayer])

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
                    stopPlayer={stopPlayer}
                    positionSquale={positionSquale[1]}
                    stopGame={winner || tied ? true : false}
                />
                <Square
                    position={2}
                    className=''
                    handlePlayer={handlePlayer}
                    stopPlayer={stopPlayer}
                    positionSquale={positionSquale[2]}
                    stopGame={winner || tied ? true : false}

                />
                <Square
                    position={3}
                    className='border-3'
                    handlePlayer={handlePlayer}
                    stopPlayer={stopPlayer}
                    positionSquale={positionSquale[3]}
                    stopGame={winner || tied ? true : false}

                />

                {/* Segunda linha */}
                <Square
                    position={4}
                    className='border border-2'
                    handlePlayer={handlePlayer}
                    stopPlayer={stopPlayer}
                    positionSquale={positionSquale[4]}
                    stopGame={winner || tied ? true : false}

                />
                <Square
                    position={5}
                    className='border'
                    handlePlayer={handlePlayer}
                    stopPlayer={stopPlayer}
                    positionSquale={positionSquale[5]}
                    stopGame={winner || tied ? true : false}

                />
                <Square
                    position={6}
                    className='border border-3'
                    handlePlayer={handlePlayer}
                    stopPlayer={stopPlayer}
                    positionSquale={positionSquale[6]}
                    stopGame={winner || tied ? true : false}
                />

                {/* Terceira Linha */}
                <Square
                    position={7}
                    className='border-2'
                    handlePlayer={handlePlayer}
                    stopPlayer={stopPlayer}
                    positionSquale={positionSquale[7]}
                    stopGame={winner || tied ? true : false}
                />
                <Square
                    position={8}
                    className=''
                    handlePlayer={handlePlayer}
                    stopPlayer={stopPlayer}
                    positionSquale={positionSquale[8]}
                    stopGame={winner || tied ? true : false}

                />
                <Square
                    position={9}
                    className='border-3'
                    handlePlayer={handlePlayer}
                    stopPlayer={stopPlayer}
                    positionSquale={positionSquale[9]}
                    stopGame={winner || tied ? true : false}
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

export default Game;