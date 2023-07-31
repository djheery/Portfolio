import GameGrid from './GameGrid/GameGrid';
import styles from './GameOfLife.module.css';

/**
 * The functional component for the GameOfLife
 *
 * @param myParam your params here
*/

const GameOfLife: React.FC = () => {
  return (
    <div>
      <GameGrid />
    </div>
  )
}

export default GameOfLife;