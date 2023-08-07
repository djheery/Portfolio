"use client"
import { useEffect, useState } from 'react';
import { GameCell as GameCellDriver} from '../../models/GameCell';
import styles from './GameCell.module.css';

/**
 * The functional component for the GameCell
 *
 * @param myParam your params here
*/

const GameCell: React.FC<{cell: GameCellDriver}> = ({cell}) => {
  const [isAlive, setIsAlive] = useState<boolean>(cell.getIsAlive);

  const cellIndicatorClass = isAlive
                          ? `${styles["cell--alive"]}`
                          : `${styles["cell--dead"]}`

  const cellClassList = `${styles["cell"]} ${cellIndicatorClass}`
  
  useEffect(() => cell.registerStateUpdateMethod(setIsAlive) , [])

  return (
    <div className={cellClassList}></div>
  )
}

export default GameCell;