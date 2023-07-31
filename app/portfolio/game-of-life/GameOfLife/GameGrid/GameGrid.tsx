import GameCell from '../GameCell/GameCell';
import { CellStateOptions } from '../GameCell/GameCell';
import styles from './GameGrid.module.css';

const getCells = () => {
  const arr: number[][] = []; 
  const rows = 20; 
  const cols = 20; 
  for(let i = 0; i < rows; i++) {
    arr.push([]);
    for(let j = 0; j < cols; j++) {
      arr[i][j] = Math.random() > 0.7 ? 1 : 0;
    }
  }

  return arr; 
}

/**
 * The functional component for the GameGrid
*/

const GameGrid: React.FC = () => {
  const cells = getCells().map((r, idx1) => {
    const cellArr = r.map((c, idx2) => {
      if(c === 1) {
        return <GameCell cellState={CellStateOptions.ALIVE} key={`${idx1}-${idx2}`}/>
      } else {
        return <GameCell cellState={CellStateOptions.DEAD} key={`${idx1}-${idx2}`} />
      }
    });

    return cellArr
  })
  return (
    <div className={styles["game-grid"]}>
      <div className={styles["game-grid__inner"]}>
        {cells}
      </div>
    </div>
  )
}

export default GameGrid;