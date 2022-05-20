import { possibility } from "../data";
import { PlayersMoves } from "../types";


const pointChecking = (boardPositions: number[], player: number) => {
    let configurations = null;

    for (const pos of possibility) {
        const hasWon = pos.numbers.filter(element => boardPositions.includes(element));
        if (hasWon.length === 3) {
            configurations = {
                numbers: hasWon,
                styles: pos.styles,
                color: player === 1 ? "white" : "black"
            }
        }
    }

    return configurations;

}

const currentPlayerMoves = (playerMoves: PlayersMoves[], ofWhichPlayer: number) => {
    for (const player of playerMoves) {
        if (player.player === ofWhichPlayer) {
            return player.boardPositions;
        }
    }

    return []
}

const ifItTied = (playerMoves: PlayersMoves[]) => {
    let values = 0;

    for (const player of playerMoves) {
        values = player.boardPositions.length + values;
    }

    return values;
}

const botMovement = (playerMoves: PlayersMoves[]) => {
    const possibility = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    const playerMovements = playerMoves[0].boardPositions
        .concat(playerMoves[1].boardPositions);

    const possiblePossibility = possibility.filter(element =>
        !playerMovements.includes(element)
    );;

    const randomNumber = Math.floor(Math.random() * possiblePossibility.length);
   
    return possiblePossibility[randomNumber];
}

export { pointChecking, currentPlayerMoves, ifItTied, botMovement }