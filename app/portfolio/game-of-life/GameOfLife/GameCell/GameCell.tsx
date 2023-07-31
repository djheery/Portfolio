import styles from './GameCell.module.css';

/**
 * An enum that details...
*/

export enum CellStateOptions {
  ALIVE = "ALIVE",
  DEAD = "DEAD",
}

/**
 * A enum type for...
 *
*/

export type CellState = CellStateOptions.ALIVE | CellStateOptions.DEAD

/**
 * The functional component for the GameCell
 *
 * @param myParam your params here
*/

const GameCell: React.FC<{cellState: CellState}> = ({cellState}) => {
  const cellIndicatorClass = cellState === CellStateOptions.ALIVE 
                          ? `${styles["cell--alive"]}`
                          : `${styles["cell--dead"]}`

  const cellClassList = `${styles["cell"]} ${cellIndicatorClass}`
  
  return (
    <div className={cellClassList}></div>
  )
}

export default GameCell;