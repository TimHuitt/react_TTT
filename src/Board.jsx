import Square from './Square'
import { useState } from 'react'

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(''))

  function handleClick(i) {
    const next = squares.slice()
    next[i] = 'x'
    setSquares(next)
  }
  
  const renderSquare = (index) =>
    <Square 
      value={squares[index]} 
      squareClick={() => handleClick(index)} 
    />
  

  return (
    <div className="Board">
      {[0, 1, 2].map(row => 
        <div key={row}>
          {[0, 1, 2].map(col => 
            renderSquare(row * 3 + col)
          )}
        </div>
      )}
    </div>
  )
}

