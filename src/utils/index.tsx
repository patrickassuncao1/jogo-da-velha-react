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

export { pointChecking, currentPlayerMoves, ifItTied }