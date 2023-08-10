"use client"

import { SetStateAction, useState } from 'react';
import styles from './useSortItem.module.css';

/**
 * An interface that details...
 *
 * @param interfaceParam This param represents...
*/

export interface UseSortItem {
  value: number,
  setValue: SetStateAction<number>,
}

/**
 * The functional component for the useSortItem
 *
 * @param myParam your params here
*/

const useSortItem = (initialValue: number) => {
  const [value, setValue] = useState<number>(initialValue);

  return { value, setValue }
}

export default useSortItem;