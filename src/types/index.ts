export interface InterfaceLine {
    top: string,
    rotate: number | string,
    left: number | string,
    width: string,
    color: string

}

export interface Players {
    player: number,
    position: any
};


export interface PlayersMoves {
    player: number,
    boardPositions: number[]
}

