import React from 'react';
import { SPanel } from '../../styles/components/Panel';
import RenderIf from '../RenderIf';

interface PanelType {
    ofWhichPlayer?: number,
    winner?: boolean,
    tied?: boolean
}


const Panel = ({ ofWhichPlayer, winner, tied }: PanelType) => {

    const playerIcon = ofWhichPlayer === 1 ? "X" : "O";
    const color = ofWhichPlayer === 1 ? "white" : "black";
    
    return (
        <SPanel>
            <div>
                <article>
                    <span>X</span>
                    <span>-</span>
                </article>
                <article>
                    <span>O</span>
                    <span>-</span>
                </article>
            </div>
            <p>E a vez do
                <RenderIf isTrue={!winner && !tied}>
                    <span style={{ color: color }}>{playerIcon}</span>
                </RenderIf>
            </p>
        </SPanel>
    );
}

export default Panel;