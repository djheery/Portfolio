"use client"

import { animationDebounce } from '@/app/util/debounce';
import { useEffect, useRef, useState } from 'react';
import { SettingsPanelItem, SortingAlgorithmVisualKeys, SortItem, SortItemArray,  SortPanelOptionKeys } from '../models/sort-models';
import { SortItemColorOptions, sortSettingsPanelOptions } from '../util/sort-visualizer-helpers';
import { SortAlgorithmVisualOptions } from '../util/sort-visualizer-helpers';

/**
 * HACK: This Hook forces rerender by incrementing a tick due to the sortItemArray being a Ref.
 * TODO: At some point I should probably reset the tick and use it visually to show the iteration count of an algorith
 * A Hook for managing the state of the sorting visualizer.  
*/

const useSortingVisualizer = () => {
  const sortItemArray = useRef<SortItemArray>([]);
  const [currentSortingAlgorithm, setCurrentSortingAlgorithm] = useState<SortingAlgorithmVisualKeys>("BUBBLE"); 
  const [tick, setTick] = useState<number>(0);
  const [arrayGenerations, setArrayGenerations] = useState<number>(0);
  const [timer, setTimer] = useState<any>(undefined);
  const [generator, setGenerator] = useState<Generator<{action: string, indicies: number[]}>>();
  const [currentInterval, setCurrentInterval] = useState<number>(1); 
  const [sortItemCount, setSortItemCount] = useState<number>(300); 

/**
  * Randomises the current array/ sets one on entry 
  * See the first useEffect for the setting of the array
  * */
  const getSortValue = (): number => {
   let sortValue = Math.random() * 100;
   if(sortValue < 1) sortValue = 1; 

   return currentSortingAlgorithm === "RADIX" 
          ? Math.floor(sortValue) 
          : sortValue; 
  }

  const newSortItemArray = () => {
    clearTimer();
    
    const newItems = []; 
    for(let i = 0; i < sortItemCount; i ++) {
      const sortValue = getSortValue();  
      const itemDetails = [sortValue, i, SortItemColorOptions.NORMAL] as SortItem
      newItems.push(itemDetails);
    }

    sortItemArray.current = newItems;
    setTick((prevTick) => prevTick + 1);
    setArrayGenerations((pg) => pg + 1);
  }

  /**
   * Starts the chosen sorting algorithm 
   * */

 const startSorting = () => {
    if(timer != undefined) return; 
    !timer && setTimer(setInterval(() => {
      processNextStep();
    }, currentInterval));
  }

  /* 
   * Processes the next step of a given algorithm and 
   * visualizes it.
   */

  const processNextStep = () => {
    let nextStep =  generator!.next();
    let i, j;
    let newItems: SortItemArray = JSON.parse(JSON.stringify(sortItemArray.current)); 

    if(!nextStep.value) {
      clearInterval(timer);
      setTimer(() => undefined);
      return;
    }

    for(let action of nextStep.value) {
      switch(action.action) {
        case "swap" :
          [i, j] = action.indicies;
          swap(newItems, i, j);
          break;
        case "set at index" :
          [i, j] = action.indicies; 
          setAtIndex(newItems, i, j); 
          break;
        case "highlight min" :
          let [min, prevMin] = action.indicies;
          highlightMin(newItems, min, prevMin); 
          break;
        case "remove min" :
          let [target, _] = action.indicies; 
          removeMin(newItems, target);
          break;
        case "highlight bound": 
          let [startIdx, endIdx] = action.indicies;
          highlightBounds(newItems, startIdx, endIdx, action.bound);
          break; 
        case "complete": 
          clearTimer();
          // TODO: Implement a visualization of the checking of the array.  
          break; 
      }

    }

    sortItemArray.current = newItems;
    animationDebounce(setTick(pt => pt + 1));
  }

/* 
 * TODO: Rename the method and params "min" is not an accurate statement in all algorithms. 
 *
 * Remove the color from the previous target index
 *   
 * @param: arr: a copy of the sortItemArray to be manipulated 
 * @param: target: The target index that needs to be changed.
 */ 

  const removeMin = (arr: SortItemArray, target:number) => {
    arr[target][2] = SortItemColorOptions.NORMAL; 
  }

  /* 
   * Used to highlight the bounds in Merge Sort
   * 
 * @param: arr: a copy of the sortItemArray to be manipulated 
 * @param: startIdx, endIdx - The Indexes of the array to be highlights from::to
   */

  const highlightBounds = (arr: SortItemArray,startIdx: number, endIdx: number, bound: number) => {
    for(let i = startIdx; i <= endIdx; i++) {
      const itemClass = SortItemColorOptions.SUBARR_BOUND;
      arr[i][2] = itemClass; 
    }
  }

 /* 
  * TODO: Rename the method and Params "min" is not an accurate statement in all algorithms.  
  *
  * Highlight the target index and remove the previous target 
  * 
  * @param: arr: A copy of the sortItemArray to be manipulated. 
  * @param: newMin: The new target to be highlighted 
  * @param: prevMin: The previous target for the highlight to be removed from
  */
 
  const highlightMin = (arr: SortItemArray, newMin: number, prevMin: number) => {
    arr[prevMin][2] = SortItemColorOptions.NORMAL;
    arr[newMin][2] = SortItemColorOptions.S_IDX;
  }

  /**
   * A utility swap method for visualization 
   *
   * @param: arr - A copy of the sortItemArray ref for update. 
   * @param: i - an index in the array to be swapped
   * @param: j - an index in the array to be swapped
  */

  const swap = (arr: SortItemArray, i: number, j: number) => {
      const temp = arr[i][0];
      arr[i][0] = arr[j][0];
      arr[j][0] = temp;
  }

  /**
   * A utility method for setting a new value at a specific index 
   * for the Merge Sort algorithm.
   *
   * @param: arr - A copy of the sortItemArray ref for update. 
   * @param: i - an index in the array to be swapped
   * @param: value - the value to be set at that index.  
  */

  const setAtIndex = async (arr: SortItemArray, i: number, value: number) => {
    arr[i][0] = value;
    // arr[i][2] = SortItemColorOptions.S_IDX; 
  }

  /* 
   * Clear the interval timer to stop an algorithm mid step. 
*/

  const clearTimer = () => {
    if(timer !== undefined) {
      clearInterval(timer);
      setTimer(() => {
          return undefined; 
       })
      setTick(0); 
    }
  }

 /**
   * TODO: Potentially rethink how the algorithm POJO is handled/ where it is located
   *
   * A method for setting a new algorithm.
   * It works by taking in a key for the new algorithm of type SortPanelOptionKeys
   *
   * @param: key: A key of type SortPanelKeys to be used to set the new algorithm.  
  */
  
  const setCurrentAlgorithm = (key: SortPanelOptionKeys) => {
    const currentAlgo = sortSettingsPanelOptions.find(i => i.isSelected); 
    const newAlgo = sortSettingsPanelOptions.find(i => i.key === key);
    newAlgo!.isSelected = true; 
    currentAlgo!.isSelected = false;
    newSortItemArray();  
    setCurrentSortingAlgorithm(key);
    if(timer) {
      clearTimer();
    }
  };

  /**
   * TODO: Implement this algorithm.
   *
   * A method for changing the current interval of of the timer. 
   * This changes how fast the visualization occurs. 
   *
   * @param: newIntervalMS: The new interval to for the timer to carry the next step of an algorithm (ms)  
  */

  const setAlgorithmSpeed = (newIntervalMS: number) => {
    clearTimer();  
  };

  /* 
   * A method for altering the currentInterval that a step re-executes
   * 
   * @param: newIntervalMs the new interval to be set. 
   */

   const setNewStepInterval = (newIntervalMs: number) => {
     clearTimer(); 
     setCurrentInterval(() => newIntervalMs); 
   }

  /* 
   * A method for setting a new sortItem count
   * 
   * @param: newItemCount the new count of Sort items to be set
   */

   const setNewSortItemCount = (newItemCount: number) => {
     clearTimer(); 
     setSortItemCount(() => newItemCount); 
     newSortItemArray(); 
   }

  /**
   * Increment the step of the current algorithm 
   */

  const step = () => {
    clearTimer();
    processNextStep();
  }

   /**
   * 
   * These are the actions to be returned to the component 
   * consuming this hook. 
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
      textContent: "One Step",
      type: "BUTTON",
      callback: step, 
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
      // @ts-ignore
      callback: setAlgorithmSpeed
    },
  ] 

  /**
   * This useEffect sets up the array and handles clean up of the timer on unmount of the Component. 
   */

  useEffect(() => {
    newSortItemArray(); 
    return () => {
      clearTimer();
    }
  }, []);

  /* 
   * This use effect sets up the the current algorithm when the sortItemArray changes. 
   * 
   */

  useEffect(() => {
    // @ts-ignore
    setGenerator(() => SortAlgorithmVisualOptions[currentSortingAlgorithm](sortItemArray.current))
  }, [arrayGenerations, currentSortingAlgorithm])

  const getCurrent = () => sortItemArray.current

  
  return {
    sortItemArray: getCurrent,
    actions: actions,
    tick: tick,
  }
}

export default useSortingVisualizer;
