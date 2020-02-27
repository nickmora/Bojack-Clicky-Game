import React from 'react';
import './App.css';
import GameContainer from './_components/GameContainer';
import {Typography} from "@material-ui/core";

function App() {
  function shuffle (arr) {
    let currentIndex = arr.length;
    let out = arr.map(x=>x)
    let temp, randomIndex;
    while (currentIndex !== 0){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temp = out[currentIndex];
      out[currentIndex] = out[randomIndex];
      out[randomIndex] = temp;
    }
    return out
  }
  const [score, setScore] = React.useState(0);
  const [highScore, setHighScore] = React.useState(0);
  const increment = () => setScore(score + 1);
  const resetScore = () => {
    if(score > highScore) setHighScore(score);
    setScore(0);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Typography>Click the pics!</Typography>
        <Typography>High Score: {highScore}</Typography>
        <Typography>Score: {score}</Typography>
      </header>
      <GameContainer 
        shuffle = {shuffle}
        increment = {increment}
        resetScore = {resetScore}
        score = {score}
      />
    </div>
  );
}

export default App;
