import { SSvg } from "../../styles/components/SSvg";
import { SwinnerScreen, TiedTextElements } from "../../styles/components/SWinnerScreen";
import PlayersIcon from "../PlayersIcon";
import RenderIf from "../RenderIf";
import X from "../PlayersXO/X";
import O from "../PlayersXO/O";
import { usePlayer } from "../../context/Player";
import { useEffect } from "react";
interface WinnerScreenType {
    ofWhichPlayer?: number
}

const WinnerScreen = ({ ofWhichPlayer }: WinnerScreenType): JSX.Element => {
    const { stopGame, setVictoryCount, victoryCount } = usePlayer();
    const colorSpan = ofWhichPlayer === 1 ? 'white' : 'black';
    const text = ofWhichPlayer === 5 ? "Empatou!" : "Vencedor!";

    useEffect(() => {
        if (ofWhichPlayer !== 5 && setVictoryCount) {

            ofWhichPlayer === 1 ? setVictoryCount(
                {
                    ...victoryCount,
                    playerX: victoryCount?.playerX ? victoryCount.playerX + 1 : 0 + 1
                }

            ) : setVictoryCount(
                {
                    ...victoryCount,
                    playerO: victoryCount?.playerO ? victoryCount.playerO + 1 : 0 + 1
                }
            )
        }
    }, [ofWhichPlayer]) // eslint-disable-line

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
        <SwinnerScreen
            variants={container}
            initial="hidden"
            animate="show"
            colorspan={colorSpan}
        >
            <SSvg>
                <PlayersIcon player={ofWhichPlayer ? ofWhichPlayer : 5} />
                <RenderIf isTrue={ofWhichPlayer === 5} >
                    <TiedTextElements>
                        <X />
                        <O />
                    </TiedTextElements>
                </RenderIf>

                <span>{text}</span>
                <button onClick={stopGame}>Reniciar</button>
            </SSvg>


        </SwinnerScreen>
    );
}

export default WinnerScreen;