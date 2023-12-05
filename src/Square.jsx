export default function Square({ value, squareClick }) {
  const getStyle = {
    color: (value == 'X') ? 'red' : 'blue'
  } 

  return (
    <button
      style={getStyle}
      className="square"
      onClick={squareClick}
    >
      {value}
    </button>
  );
}

