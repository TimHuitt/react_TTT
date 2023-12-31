import Square from './Square'
import { useState } from 'react'

export default function Board() {
  const [turn, setTurn] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(''))

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return
    
    const next = squares.slice()
    
    if (turn) {
      next[i] = 'X'
    } else {
      next[i] = 'O'
    }
    setSquares(next)
    setTurn(!turn)
  }
  
  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = winner + " WINS!"
  } else {
    status = 'Next Player: ' + (turn ? 'X' : 'O')
  }

  const renderSquare = (index) =>
    <Square 
      value={squares[index]} 
      squareClick={() => handleClick(index)} 
    />
  

  return (
    <>
    <div className="status">{status}</div>
    <div className="Board">
      {[0, 1, 2].map(row => 
        <div key={row}>
          {[0, 1, 2].map(col => 
            renderSquare(row * 3 + col)
          )}
        </div>
      )}
    </div>
    </>
  )

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}

