import O from "../PlayersXO/O";
import X from "../PlayersXO/X";

const PlayersIcon = ({ player }: { player: number }) => {
    return (
        <>
            {player === 1 ? (
                <X />
            ) : player === 2 ? (
                <O />
            ) : (<div></div>)}
        </>

    )
}

export default PlayersIcon;