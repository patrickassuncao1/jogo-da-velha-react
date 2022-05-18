import { SSvg } from "../../styles/components/SSvg";
import { SwinnerScreen } from "../../styles/components/SWinnerScreen";
import PlayersIcon from "../PlayersIcon";
interface WinnerScreenType {
    ofWhichPlayer?: number
}

const WinnerScreen = ({ ofWhichPlayer }: WinnerScreenType): JSX.Element => {

    console.log(ofWhichPlayer);
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
                <span>{text}</span>
            </SSvg>

        </SwinnerScreen>
    );
}

export default WinnerScreen;