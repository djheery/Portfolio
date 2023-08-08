"use client"
import { useEffect, useState } from 'react';
import { GameCell as GameCellDriver} from '../../models/GameCell';
import styles from './GameCell.module.css';


/**
 * The functional component for the GameCell
 *
 * @param myParam your params here
*/

const GameCell: React.FC<{cellDriver: GameCellDriver}> = ({cellDriver}) => {
  const [isAlive, setIsAlive] = useState<boolean>(cellDriver.getIsAlive);

  let [x, y] = cellDriver.getCoords;
  const cellClassList = `
    ${styles["cell"]} 
    ${isAlive ? `${styles["cell--alive"]}` : `${styles["cell--dead"]}`}
  `;
  
  useEffect(() => cellDriver.registerStateUpdateMethod(setIsAlive) , [])

  return (
    <div 
      className={cellClassList}
      suppressHydrationWarning={true}
    >

    </div>
  )
}

export default GameCell;