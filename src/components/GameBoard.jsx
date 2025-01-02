import React, { useEffect } from 'react';
import { use } from 'react';

function GameBoard({ gameBoard, setGameBoard, score, setScore }) {
  useEffect(() => {
    initializeGame();
  }, []);

  function initializeGame() {
    const newGrid = Array(4)
      .fill(null)
      .map(() => Array(4).fill(0));
    addRandomTile(newGrid);
    addRandomTile(newGrid);
    setGameBoard(newGrid);
    setScore(0);
  }
  useEffect(() => {
    const newGameButton = document.getElementById('newgame-button');
    if (newGameButton) {
      newGameButton.addEventListener('click', initializeGame);
      return () => {
        newGameButton.removeEventListener('click', initializeGame);
      };
    }
  }, []);

  function addRandomTile(grid) {
    const emptyTiles = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (grid[i][j] === 0) emptyTiles.push([i, j]);
      }
    }

    if (emptyTiles.length === 0) return; // No empty space

    const [row, col] = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    grid[row][col] = Math.random() < 0.9 ? 2 : 4;
  }

  function getTileColor(value) {
    if (value === 0) return 'bg-gray-300'; // Default color for empty tiles
    const power = Math.log2(value); // Calculate the power of 2
    const colors = [
      'bg-[#eee4da]', // 2^1 (2)
      'bg-[#ede0c8]', // 2^2 (4)
      'bg-[#f2b179]', // 2^3 (8)
      'bg-[#f59563]', // 2^4 (16)
      'bg-[#f67c5f]', // 2^5 (32)
      'bg-[#f65e3b]', // 2^6 (64)
      'bg-[#edcf72]', // 2^7 (128)
      'bg-[#edcc61]', // 2^8 (256)
      'bg-[#edc850]', // 2^9 (512)
      'bg-[#edc53f]', // 2^10 (1024)
      'bg-[#edc22e]', // 2^11 (2048)
    ];

    return colors[power - 1] || `bg-[hsl(${(power - 11) * 20},70%,50%)]`;
  }

  const moveLeft = (grid) => {
    let newScore = score;
    let newGrid = grid.map(row => {
      let newRow = row.filter(val => val);
      for (let i = 0; i < newRow.length - 1; i++) {
        if (newRow[i] === newRow[i + 1]) {
          newRow[i] *= 2;
          newScore += newRow[i];
          newRow[i + 1] = 0;
        }
      }
      newRow = newRow.filter(val => val);
      while (newRow.length < 4) newRow.push(0);
      return newRow;
    });
    setScore(newScore);
    return newGrid;
  };

  const moveRight = (grid) => {
    let newScore = score;
    let newGrid = grid.map(row => {
      let newRow = row.filter(val => val);
      for (let i = newRow.length - 1; i > 0; i--) {
        if (newRow[i] === newRow[i - 1]) {
          newRow[i] *= 2;
          newScore += newRow[i];
          newRow[i - 1] = 0;
        }
      }
      newRow = newRow.filter(val => val);
      while (newRow.length < 4) newRow.unshift(0);
      return newRow;
    });
    setScore(newScore);
    return newGrid;
  };

  const moveUp = (grid) => {
    let newGrid = transpose(grid);
    newGrid = moveLeft(newGrid);
    newGrid = transpose(newGrid);
    return newGrid;
  };

  const moveDown = (grid) => {
    let newGrid = transpose(grid);
    newGrid = moveRight(newGrid);
    newGrid = transpose(newGrid);
    return newGrid;
  };

  const transpose = (grid) => {
    return grid[0].map((_, colIndex) => grid.map(row => row[colIndex]));
  };

  const handleKeyDown = (event) => {
    let newGrid;
    switch (event.key) {
      case 'ArrowUp':
        newGrid = moveUp(gameBoard);
        break;
      case 'ArrowDown':
        newGrid = moveDown(gameBoard);
        break;
      case 'ArrowLeft':
        newGrid = moveLeft(gameBoard);
        break;
      case 'ArrowRight':
        newGrid = moveRight(gameBoard);
        break;
      default:
        return;
    }
    addRandomTile(newGrid);
    setGameBoard(newGrid);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameBoard]);

  const renderGrid = () => {
    return gameBoard.map((row, rowIndex) => (
      <React.Fragment key={rowIndex}>
        {row.map((value, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`flex items-center justify-center h-20 w-20 text-lg font-bold rounded-md ${getTileColor(
              value
            )}`}
          >
            {value === 0 ? '' : value}
          </div>
        ))}
      </React.Fragment>
    ));
  };
  useEffect(() => {
    const newGameButton = document.getElementById('newgame-button');
    if (newGameButton) {
        newGameButton.addEventListener('click', initializeGame);
    }
    return () => {
        if (newGameButton) {
            newGameButton.removeEventListener('click', initializeGame);
        }
    };
}, []);

  return (
    <div className='game-container'>
      <div className="gameboard">
        {renderGrid()}
      </div>
    </div>
  );
}

export default GameBoard;