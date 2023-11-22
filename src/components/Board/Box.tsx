import {useContext} from 'react'
import { GameContext } from '../GameContext'

interface BoxProps{
    itemKey : number,
    handleBoxClick:Function
}

const Box = ({itemKey,handleBoxClick} : BoxProps) => {

    const gameContext = useContext(GameContext);
    
    const handleClick = () => {handleBoxClick(itemKey)};

    const boardElement=gameContext.board[itemKey];

    return (
        <button className="box-btn" disabled={gameContext.gameFinished} onClick={handleClick}>{boardElement}</button>
    )
}

export default Box;