import Board from "./Board/Board";
import {MouseEventHandler, useState} from 'react'
import { GameContext } from "./GameContext";
import { BoardType, playerType } from "./types";
import { count } from "console";




const Game = ({startNewGame}:{startNewGame:Function}) => {
    

    const [currPlayerId,setCurrPlayerId] = useState<playerType>(1);

    const [board,setBoard] = useState<Array<BoardType>>(new Array(9).fill(null));

    const [winner,setWinner] = useState<string | null>(null);

    const handleBoxClick = (boxKey : number) => {
        if(board[boxKey] != null){
            return;
        }
        const updatedBoard=[...board];
        updatedBoard[boxKey] = currPlayerId == 0 ? 'x' : 'o';
        setBoard(updatedBoard);
        
        if(checkWinner(updatedBoard,currPlayerId)){
            setWinner(players[currPlayerId].name);
        }
        setCurrPlayerId(currPlayerId == 0 ? 1 : 0);
    }

   
    const checkWinner = (board: Array<BoardType>, playerId: number): boolean => {
        const winningConditions: number[][] = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Righe
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colonne
            [0, 4, 8], [2, 4, 6] // Diagonali
        ];

        for (const condition of winningConditions) {
            
            const [a, b, c] = condition;
            if (board[a] === board[b] && board[b] === board[c] && board[a] === (playerId === 0 ? 'x' : 'o')) {
                return true; // Vittoria trovata
            }
        }

        return false; // Nessuna vittoria
    };

    const player1 = {
        id:1,
        name: "X"
    };

    const player2 = {
        id:2,
        name: "O"
    };

    const newGame = ()=>{startNewGame()}

    const players=[player1,player2];

    const gameEndedHtml= (<div>
        Ha vinto {winner}
        <div><button onClick={newGame}>Nuova partita</button></div>
    </div>)

    return (
    <div>
        {!winner && <h3>E il turno di {players[currPlayerId].name}</h3>}
        <div>
            <GameContext.Provider value={{
            playerId:currPlayerId,
            board: board,
            setBoard: setBoard,
            setCurrPlayerId: setCurrPlayerId,
            gameFinished: (winner == null ? false: true)
        }}>
            <Board handleBoxClick={handleBoxClick}/>
        </GameContext.Provider>
        </div>
        {winner && gameEndedHtml}
    </div>
    )
}

export default Game;