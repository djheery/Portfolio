"use client"

import { animationDebounce } from '@/app/util/debounce';
import { useCallback, useEffect, useState } from 'react';
import { SortOptionItemArray } from '../models/sort-models';
import { bogoSortVisual } from '../util/algorithms/visual/bogo-sort-visual';
import { bubbleSortVisual } from '../util/algorithms/visual/bubble-sort-visual';
import { insertionSortVisual } from '../util/algorithms/visual/insertion-sort-visual';
import { mergeSortVisual } from '../util/algorithms/visual/merge-sort-visual';
import { quickSortVisual } from '../util/algorithms/visual/quick-sort-visual';
import { selectionSortVisual } from '../util/algorithms/visual/selection-sort-visual';
import { sortSettingsPanelOptions } from '../util/sort-visualizer-helpers';
import styles from './useSortingVisualizer.module.css';

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
    for(let i = 0; i < 100; i ++) {
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
    quickSortVisual(sortItemArray, swap);
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
  
  const setCurrentAlgorithm = () => {};

  const setAlgorithmSpeed = () => {};

  const actions = [
    {
      textContent: "Start", 
      type: "BUTTON",
      callback: startSorting, 
    },
    {
      textContent: "Randomise Items",
      type: "BUTTON",
      callback: newSortItemArray, 
    },
    {
      textContent: "Current Algorithm", 
      type: "SELECT", 
      callback: setCurrentAlgorithm,
      options: sortSettingsPanelOptions,
    },
    {
      textContent: "Set Speed", 
      type: "RANGE", 
      callback: setAlgorithmSpeed
    },
  ]


  useEffect(() => newSortItemArray(), []);

  
  return {
    sortItemArray,
    actions: actions
  }
}

export default useSortingVisualizer;