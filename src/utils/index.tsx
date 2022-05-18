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

/* const pointChecking = (arrayPosition: number, player: number) => {

    let newObject = null;

    for (let i = 0; i < 8; i++) {

        const arrayPossibility = possibility[i].numbers;

        const result = arrayPossibility.filter(function (value) {
            return players[arrayPosition].position.indexOf(value) > -1;
        })

        if (result.length === 3) {
            newObject = {
                numbers: result,
                styles: possibility[i].styles,
                color: player === 1 ? "white" : "black"
            };

            break;
        }
    }

    return newObject;
} */

export { pointChecking, currentPlayerMoves }