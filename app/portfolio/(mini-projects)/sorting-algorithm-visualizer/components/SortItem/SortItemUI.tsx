"use client"
import React from 'react';
import styles from './SortItemUI.module.css';

/* 
 * TODO: Perhaps remove the itemIdx as it seems useless for my purposes. 
 *
 * An interface to detail the expected props for the SortItemUI component
 * 
 * @param: itemValue - used to determine the height of the item 
 * @param: itemIdx - currently unused. 
 * @param: itemClass - the class to be used to color the component. 
 */

export interface SortUIProps {
  itemValue: number, 
  itemIdx: number, 
  itemClass: string, 
};

/**
 * The functional component for the SortItemUI
 *
 * @param: itemValue - The Value of the item 
 * @param: itemclass - The class of the item based on whether they are targets of the running algorithm. 
*/

const SortItemUI: React.FC<SortUIProps> = ({itemValue, itemClass }) => {
  const itemClassList  = `${styles["sort-item"]} ${styles[`${itemClass}`]}`
  let s = { width: 3, height: `${itemValue}%` }

  return (
    <div className={itemClassList} style={s}></div>
  )
}

export default React.memo(SortItemUI)
