import React, { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Game from './components/Game';

function App() {

  const [gameNumber,setGamenumber] = useState(0);
  
  const startNewGame = ()=>{setGamenumber(gameNumber+1)}

  return (
    <div className="App">
      <h1>Tic tac toe</h1>
      <Game key={gameNumber} startNewGame={startNewGame}/>
    </div>
  );
}

export default App;
