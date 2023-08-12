"use client"

import { animationDebounce } from '@/app/util/debounce';
import { useCallback, useEffect, useState } from 'react';
import { SettingsPanelItem, SortingAlgorithmVisualKeys, SortPanelOptionKeys } from '../models/sort-models';
import { sortSettingsPanelOptions } from '../util/sort-visualizer-helpers';
import { SortAlgorithmVisualOptions } from '../util/sort-visualizer-helpers';

/**
 * The functional component for the useSortingVisualizer
 *
 * @param myParam your params here
*/

const useSortingVisualizer = () => {
  const [sortItemArray, setSortItemArray] = useState<number[][]>([]);
  const [currentSortingAlgorithm, setCurrentSortingAlgorithm] = useState<SortingAlgorithmVisualKeys>("BUBBLE"); 
  const [isRunning, setIsRunning] = useState<boolean>(false);

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  const newSortItemArray = useCallback(() => {
    const newItems = []; 
    for(let i = 0; i < 500; i ++) {
      const sortValue = Math.random() * 100; 
      newItems.push([sortValue < 1 ? 1 : sortValue, i]);
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
    if(currentSortingAlgorithm === "MERGE") 
      SortAlgorithmVisualOptions[currentSortingAlgorithm](sortItemArray, setAtIndex);
    else 
      SortAlgorithmVisualOptions[currentSortingAlgorithm](sortItemArray, swap);

  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  const sleep = async (ms = 10) => {
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

    return isRunning;
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  const setAtIndex = async (i: number, value: number) => {
    animationDebounce(setSortItemArray((prevItems) => {
      const newItems = [...prevItems];
      newItems[i][0] = value;
      return newItems; 
    }))

    await sleep();
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */
  
  const setCurrentAlgorithm = (key: SortPanelOptionKeys) => {
    const currentAlgo = sortSettingsPanelOptions.find(i => i.isSelected); 
    const newAlgo = sortSettingsPanelOptions.find(i => i.key === key);
    newAlgo!.isSelected = true; 
    currentAlgo!.isSelected = false;
    
    setCurrentSortingAlgorithm(key);
  };

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  const setAlgorithmSpeed = () => {};

  /**
   * An interface that details...
   *
   * @param interfaceParam This param represents...
  */

  const actions: SettingsPanelItem[] = [
    {
      textContent: "Start", 
      type: "BUTTON",
      callback: startSorting as () => void, 
    },
    {
      textContent: "Randomise Items",
      type: "BUTTON",
      callback: newSortItemArray, 
    },
    {
      textContent: "Current Algorithm", 
      type: "SELECT", 
      // @ts-ignore
      callback: setCurrentAlgorithm,
      options: sortSettingsPanelOptions,
    },
    {
      textContent: "Set Speed", 
      type: "RANGE", 
      callback: setAlgorithmSpeed
    },
  ] 

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  useEffect(() => {
    newSortItemArray();
  }, []);

  
  return {
    sortItemArray,
    actions: actions
  }
}

export default useSortingVisualizer;