import { Dispatch, SetStateAction } from "react"

export type BoardType = 'x' | 'o' | null

export type playerType = 0 | 1

export interface GameContextType {
    playerId: number,
    board: Array<BoardType>,
    setBoard: Dispatch<SetStateAction<Array<BoardType>>>,
    setCurrPlayerId: Dispatch<SetStateAction<playerType>>,
    gameFinished: boolean
}