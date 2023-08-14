"use client"

import { animationDebounce } from '@/app/util/debounce';
import { useEffect, useRef, useState } from 'react';
import { SettingsPanelItem, SortingAlgorithmVisualKeys, SortItem, SortItemArray,  SortPanelOptionKeys } from '../models/sort-models';
import { SortItemColorOptions, sortSettingsPanelOptions } from '../util/sort-visualizer-helpers';
import { SortAlgorithmVisualOptions } from '../util/sort-visualizer-helpers';

/**
 * The functional component for the useSortingVisualizer
 *
 * @param myParam your params here
*/

const useSortingVisualizer = () => {
  const sortItemArray = useRef<SortItemArray>([]);
  const [currentSortingAlgorithm, setCurrentSortingAlgorithm] = useState<SortingAlgorithmVisualKeys>("BUBBLE"); 
  const [tick, setTick] = useState<number>(0);
  const [arrayGenerations, setArrayGenerations] = useState<number>(0);
  const [timer, setTimer] = useState<any>(undefined);
  const [generator, setGenerator] = useState<Generator<{action: string, indicies: number[]}>>();

/**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */
 
  const newSortItemArray = () => {
    if(timer !== undefined) {
      clearTimer();
      setTimer(undefined)
    }
    const newItems = []; 
    for(let i = 0; i < 300; i ++) {
      const sortValue = Math.random() * 100; 
      const itemDetails = [
        sortValue < 1 ? 1 : sortValue, 
        i, 
        SortItemColorOptions.NORMAL
      ] as SortItem
      newItems.push(itemDetails);
    }

    sortItemArray.current = newItems;
    setTick((prevTick) => prevTick + 1);
    setArrayGenerations((pg) => pg + 1);
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

 const startSorting = () => {
    !timer && setTimer(setInterval(() => {
      processNextStep();
    }, .5));
    processNextStep();
  }

  const processNextStep = () => {
    let nextStep =  generator!.next();
    let i, j;

    if(!nextStep.value) {
      clearInterval(timer);
      setTimer(() => undefined);
      return;
    }


    switch(nextStep.value.action) {
      case "swap" :
        [i, j] = nextStep.value.indicies;
        swap(i, j);
        break;
      case "compare" :
        // Will handle after visualization works
        break;
      case "set at index" :
        [i, j] = nextStep.value.indicies; 
        setAtIndex(i, j); 
        break;
      case "complete": 
        clearTimer();
        // Will handle after visualization works
        break; 
    }

    animationDebounce(setTick(pt => pt + 1));

    if(!timer) {
      return;
    }

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

  const swap = (i: number, j: number) => {
      const newItems = JSON.parse(JSON.stringify(sortItemArray.current));
      const temp = newItems[i][0];
      newItems[i][0] = newItems[j][0];
      newItems[j][0] = temp; 
      sortItemArray.current = newItems;
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  const setAtIndex = async (i: number, value: number) => {
    const newItems =  JSON.parse(JSON.stringify(sortItemArray.current));
    newItems[i][0] = value;
    sortItemArray.current = newItems;
  }

  const clearTimer = () => {
    setTimer(() => {
      clearInterval(timer);
      return undefined; 
    })
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
    clearTimer();
  };

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  const setAlgorithmSpeed = () => {};

  /**
   * Stepo
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  const step = () => {
    if(timer !== undefined) {
      clearTimer();
    }

    processNextStep();
  }

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
    return () => {
      if(timer !== undefined) {
        clearTimer();
      }
    }
  }, []);

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
