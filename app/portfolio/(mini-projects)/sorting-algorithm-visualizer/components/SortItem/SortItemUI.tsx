"use client"
import { useEffect, useState } from 'react';
import SortItem, { SortItemProps } from '../../models/SortItem';
import styles from './SortItemUI.module.css';


/**
 * The functional component for the SortItemUI
 *
 * @param myParam your params here
*/

const SortItemUI: React.FC<{item: SortItem}> = ({item}) => {
  const [itemStyles, setItemStyles] = useState<SortItemProps>(item.getSortItemValues)
  const s = {
    width: `${itemStyles.width}px`, 
    left: `${itemStyles.left}px`, 
    height: `${itemStyles.height}%`,
    backgroundColor: `${itemStyles.index === 5 ? "red" : "black"}`
  }

  useEffect(() => {
    item.registerStateAction(setItemStyles);
  }, [])

  return (
    <div 
      className={styles["sort-item"]} 
      style={s}
      suppressHydrationWarning
    >
      <div className={styles["sort-item__inner"]} style={{width: "98%"}}></div>
    </div>
  )
}

export default SortItemUI;