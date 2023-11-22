import Box from "./Box";

interface BoxProps{
    handleBoxClick:Function
}


const Board = ({handleBoxClick}:BoxProps) => {

   

    return (
        <div className="grid-container">
            <div className="row">
                {[0,1,2].map((el)=>{
                    return <Box key={el} itemKey={el} handleBoxClick={handleBoxClick}/>
                })}
            </div>
            <div className="row">
                {[3,4,5].map((el)=>{
                    return <Box key={el} itemKey={el} handleBoxClick={handleBoxClick} />
                })}
            </div>
            <div className="row">
                {[6,7,8].map((el)=>{
                    return <Box key={el} itemKey={el} handleBoxClick={handleBoxClick}/>
                })}
            </div>
        </div>
    );
}

export default Board;