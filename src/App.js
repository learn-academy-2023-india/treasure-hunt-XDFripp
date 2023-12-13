import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  console.log("board: ", board)
  
  const handleClick = (id) => {
    let treasureLocation = Math.floor(Math.random() * board.length)
    let bombLocation = Math.floor(Math.random() * board.length)  
    console.log("treasureLocation: ", treasureLocation)
    console.log("bombLocation: ", bombLocation)
      if(treasureLocation === id) {
        board[id] = "🏝️"
        setBoard([...board])
      } else if (bombLocation === treasureLocation || bombLocation === id) {
        board[id] = "💣"
        setBoard([...board])
      } else {
          board[id] = "🤷🏾‍♂️"
          setBoard([...board])
    }
  }
  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <Square board={board} handleClick={handleClick}/>
    </>
  )
}
export default App
