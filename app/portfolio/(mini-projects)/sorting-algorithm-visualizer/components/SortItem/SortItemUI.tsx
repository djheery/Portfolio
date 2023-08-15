"use client"
import React from 'react';
import styles from './SortItemUI.module.css';

export interface SortUIProps {
  itemValue: number, 
  itemIdx: number, 
  itemClass: string, 
};


/**
 * The functional component for the SortItemUI
 *
 * @param myParam your params here
*/

const SortItemUI: React.FC<SortUIProps> = ({itemValue, itemClass }) => {

  const itemClassList  = `${styles["sort-item"]} ${styles[`${itemClass}`]}`
  let s = { width: 3, height: `${itemValue}%` }

  return (
    <div className={itemClassList} style={s}></div>
  )
}

export default React.memo(SortItemUI)
