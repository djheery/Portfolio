"use client"
import { useEffect, useState } from 'react';
import React from 'react';
import styles from './SortItemUI.module.css';

/**
 * The functional component for the SortItemUI
 *
 * @param myParam your params here
*/

const SortItemUI: React.FC<{itemValue: number, itemIdx: number}> = React.memo(({itemValue, itemIdx}) => {
  let s = {
    width: 5, 
    height: `${itemValue}%`,
  }

  return (
    <div className={styles["sort-item"]} style={s}>
      
    </div>
  )
})

export default SortItemUI;