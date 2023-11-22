import { createContext } from "react";
import { GameContextType } from "./types";



export const GameContext = createContext<GameContextType>({
    playerId : 1,
    board: new Array(9).fill(null),
    setBoard: ()=>{},
    setCurrPlayerId: ()=>{},
    gameFinished: false
});