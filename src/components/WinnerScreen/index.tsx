import { SSvg } from "../../styles/components/SSvg";
import { SwinnerScreen, TiedTextElements } from "../../styles/components/SWinnerScreen";
import PlayersIcon from "../PlayersIcon";
import RenderIf from "../RenderIf";
import X from "../PlayersXO/X";
import O from "../PlayersXO/O";
interface WinnerScreenType {
    ofWhichPlayer?: number
}

const WinnerScreen = ({ ofWhichPlayer }: WinnerScreenType): JSX.Element => {
    const colorSpan = ofWhichPlayer === 1 ? 'white' : 'black';
    const text = ofWhichPlayer === 5 ? "Empatou!" : "Vencedor!";

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
            colorSpan={colorSpan}
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
            </SSvg>


        </SwinnerScreen>
    );
}

export default WinnerScreen;