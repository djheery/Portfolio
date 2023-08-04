"use client"
import { useEffect, useState } from 'react';
import { GameCell as GC} from '../util/GameCell';
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

const GameCell: React.FC<{cell: GC}> = ({cell}) => {
  const [isAlive, setIsAlive] = useState<boolean>(cell.getIsAlive);

  const cellIndicatorClass = isAlive
                          ? `${styles["cell--alive"]}`
                          : `${styles["cell--dead"]}`

  const cellClassList = `${styles["cell"]} ${cellIndicatorClass}`
  
  useEffect(() => {
    cell.setStateUpdateMethod(setIsAlive);
  }, [])

  return (
    <div className={cellClassList}></div>
  )
}

export default GameCell;