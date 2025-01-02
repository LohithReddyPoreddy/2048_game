import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import GameBoard from './components/GameBoard'
import Footer from './components/Footer'

function App() {
  const [score, setScore] = useState(0)
  const [gameBoard, setGameBoard] = useState([])
  

  return (
    <>
    <div className='app'>
        <Header score = {score} />
        <GameBoard gameBoard={gameBoard} setGameBoard={setGameBoard} score={score} setScore={setScore} />
        <Footer />
    </div>
    </>
      
    
  )
}

export default App