"use client"

import { animationDebounce } from '@/app/util/debounce';
import { useCallback, useEffect, useState } from 'react';
import { bogoSortVisual } from '../util/algorithms/visual/bogo-sort-visual';
import { bubbleSortVisual } from '../util/algorithms/visual/bubble-sort-visual';
import { insertionSortVisual } from '../util/algorithms/visual/insertion-sort-visual';
import { mergeSortVisual } from '../util/algorithms/visual/merge-sort-visual';
import { quickSortVisual } from '../util/algorithms/visual/quick-sort-visual';
import { selectionSortVisual } from '../util/algorithms/visual/selection-sort-visual';
import styles from './useSortingVisualizer.module.css';
import useSortItem, { UseSortItem } from './useSortItem';

/**
 * The functional component for the useSortingVisualizer
 *
 * @param myParam your params here
*/

const useSortingVisualizer = () => {
  const [sortItemArray, setSortItemArray] = useState<number[][]>([]);
  const [method, setSortItemMethod] = useState<string>(); 
  const [isRunning, setIsRunning] = useState<boolean>(false);

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  const newSortItemArray = useCallback(() => {
    const newItems = []; 
    for(let i = 0; i < 300; i ++) {
      const sortValue = Math.random() * 100; 
      newItems.push([sortValue, i]);
    }

    setSortItemArray(newItems)
  }, [])

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  const startSorting = async () => {
    if(isRunning) return; 
    bogoSortVisual(sortItemArray, swap);
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  const sleep = async (ms = 1) => {
    return new Promise((res) => setTimeout(res, ms));
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  const swap = async (i: number, j: number) => {
    animationDebounce(setSortItemArray((prevItems) => {
      const newItems = [...prevItems];
      const temp = newItems[i][0];
      newItems[i][0] = newItems[j][0];
      newItems[j][0] = temp; 
  
      return newItems;
    }));

    await sleep();
  }

  const setAtIndex = async (i: number, value: number) => {
    animationDebounce(setSortItemArray((prevItems) => {
      const newItems = [...prevItems];
      newItems[i][0] = value;
      return newItems; 
    }))

    await sleep();
  }


  useEffect(() => {
    newSortItemArray();
  }, [])

  
  return {
    startSorting,
    sortItemArray,
    randomise: newSortItemArray, 
  }
}

export default useSortingVisualizer;