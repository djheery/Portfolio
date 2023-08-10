"use client"

import { useCallback, useEffect, useState } from 'react';
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
    quickSort();
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
    setSortItemArray((prevItems) => {
      const newItems = [...prevItems];
      const temp = newItems[i][0];
      newItems[i][0] = newItems[j][0];
      newItems[j][0] = temp; 
  
      return newItems;
    });

    await sleep();
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  const bubbleSort = async () => {
    let sorted = false; 
    let counter = sortItemArray.length - 1; 
    while(!sorted) {
      sorted = true; 
      for(let i = 0; i < counter; i++) {
        let j = i + 1; 
        if(sortItemArray[i][0] > sortItemArray[j][0]) {
          sorted = false; 
          await swap(i, i + 1);
        }
      }

      counter--;
    }
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  const partition = async (startIdx: number, endIdx: number) => {
    let pivot = sortItemArray[endIdx][0];
    let i = startIdx - 1; 

    for(let j = startIdx; j <= endIdx - 1; j++) {
      if(sortItemArray[j][0] < pivot) {
        i++; 
        await swap(i, j);
      }
    }

    await swap(i + 1, endIdx);

    return i + 1; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  const quickSort = async (start = 0, end = sortItemArray.length - 1) => {
    if(start < end) {
      let p = await partition(start, end); 
      quickSort(start, p - 1);
      quickSort(p + 1, end);
    }
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  const selectionSort = async () => {
    for(let i = 0; i < sortItemArray.length; i++) {
      let min = i; 
      for(let j = i + 1; j < sortItemArray.length; j++) {
        if(sortItemArray[j][0] < sortItemArray[min][0]) {
          min = j; 
        }
      }

      if(min !== i) 
        await swap(i, min);
    }
  }
  
  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  const insertionSort = async () => {
    for(let i = 1; i < sortItemArray.length; i++) {
      let j = i; 
      while(j > 0 && sortItemArray[j][0] < sortItemArray[j - 1][0]) {
        await swap(j, j-1);
        j--; 
      }
    }
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  const merge = async () => {

  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  const mergeSort = async () => {

  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  const heapSort = async () => {

  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  const radixSort = async () => {

  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  const bogoSort = async () => {

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