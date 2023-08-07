import { useEffect, useState } from 'react';
import { LegendItem } from '../../../models/GameOfLifeSettings';
import styles from './GameLegendItem.module.css'

/**
 * The functional component for the LegendItem
 *
 * @param myParam your params here
*/

const GameLegendItem: React.FC<{itemSettings: LegendItem}> = ({itemSettings}) => {
  const [currentCount, setState] = useState<number>(itemSettings.defaultValue);

  useEffect(() => {
    itemSettings.driverRegisterMethod(setState);
    return () => itemSettings.driverDestroyMethod();
  }, [])
  
  return (
    <div className={styles["legend-item"]}>
      <div>{itemSettings.name}</div>
      <div suppressHydrationWarning={true}>{currentCount}{itemSettings.flag && `${itemSettings.flag}`}</div>
    </div>
  )
}

export default GameLegendItem;