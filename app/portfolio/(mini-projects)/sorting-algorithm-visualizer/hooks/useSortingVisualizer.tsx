"use client"

import { animationDebounce } from '@/app/util/debounce';
import { useCallback, useEffect, useState } from 'react';
import { SettingsPanelItem, SortingAlgorithmVisualKeys, SortingAlgorithmVisualValues, SortPanelOptionKeys } from '../models/sort-models';
import { bogoSortVisual } from '../util/algorithms/visual/bogo-sort-visual';
import { bubbleSortVisual } from '../util/algorithms/visual/bubble-sort-visual';
import { insertionSortVisual } from '../util/algorithms/visual/insertion-sort-visual';
import { mergeSortVisual } from '../util/algorithms/visual/merge-sort-visual';
import { quickSortVisual } from '../util/algorithms/visual/quick-sort-visual';
import { selectionSortVisual } from '../util/algorithms/visual/selection-sort-visual';
import { SortPanelOptions, sortSettingsPanelOptions } from '../util/sort-visualizer-helpers';
import { SortAlgorithmVisualOptions } from '../util/sort-visualizer-helpers';
import styles from './useSortingVisualizer.module.css';

/**
 * The functional component for the useSortingVisualizer
 *
 * @param myParam your params here
*/

const useSortingVisualizer = () => {
  const [sortItemArray, setSortItemArray] = useState<number[][]>([]);
  const [currentSortingAlgorithm, setCurrentSortingAlgorithm] = useState<SortingAlgorithmVisualKeys>("QUICK"); 
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
  }

  const setAtIndex = async (i: number, value: number) => {
    animationDebounce(setSortItemArray((prevItems) => {
      const newItems = [...prevItems];
      newItems[i][0] = value;
      return newItems; 
    }))

    await sleep();
  }
  
  const setCurrentAlgorithm = (key: SortPanelOptionKeys) => {
    const currentAlgo = sortSettingsPanelOptions.find(i => i.isSelected); 
    const newAlgo = sortSettingsPanelOptions.find(i => i.key === key);
    newAlgo!.isSelected = true; 
    currentAlgo!.isSelected = false;
    
    setCurrentSortingAlgorithm(key);
  };

  const setAlgorithmSpeed = () => {};

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


  useEffect(() => {
    newSortItemArray()
  }, []);

  
  return {
    sortItemArray,
    actions: actions
  }
}

export default useSortingVisualizer;