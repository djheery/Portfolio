"use client"
import React from 'react';
import styles from './SortItemUI.module.css';

/**
 * The functional component for the SortItemUI
 *
 * @param myParam your params here
*/

const SortItemUI: React.FC<{itemValue: number, itemIdx: number, itemClass: string}> = ({itemValue, itemIdx, itemClass }) => {
  let s = {
    width: 3, 
    height: `${itemValue}%`,
  }
  const itemClassList  = `${styles["sort-item"]} ${styles[`${itemClass}`]}`

  return (
    <div className={itemClassList} style={s}>
      
    </div>
  )
}

export default React.memo(SortItemUI)
