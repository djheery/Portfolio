import { arrayBuffer } from "stream/consumers";
import { SortItemArray, SortOptionItem } from "../models/sort-models";
import { SortPanelOptionKeys } from "../models/sort-models";
import { bogoSortVisual } from "./algorithms/visual/bogo-sort-visual";
import { bubbleSortVisual } from "./algorithms/visual/bubble-sort-visual";
import { heapSortVisual } from "./algorithms/visual/heap-sort-visual";
import { insertionSortVisual } from "./algorithms/visual/insertion-sort-visual";
import { mergeSortVisual } from "./algorithms/visual/merge-sort-visual";
import { quickSortVisual } from "./algorithms/visual/quick-sort-visual";
import { radixSortVisual } from "./algorithms/visual/radix-sort-visual";
import { selectionSortVisual } from "./algorithms/visual/selection-sort-visual";
import { shellSortVisual } from "./algorithms/visual/shell-sort-visual";

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * This param represents...
*/

export const swap = (sortItemArray: SortItemArray, i: number, j: number) => {
  const temp = sortItemArray[i][0]; 
  sortItemArray[i][0] = sortItemArray[j][0]; 
  sortItemArray[j][0] = temp; 
  return sortItemArray; 
}

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/

export const setAtIndex = (arr: SortItemArray, i:number, value:number) => {
  arr[i][0] = value; 
}

/**
 * An interface that details...
 *
 * @param interfaceParam This param represents...
*/

export const SortPanelOptions = {
  BUBBLE: "Bubble Sort",
  SELECTION: "Selection Sort", 
  INSERTION: "Insertion Sort", 
  HEAP: "Heap Sort", 
  MERGE: "Merge Sort", 
  QUICK: "Quick Sort", 
  RADIX: "Radix Sort", 
  SHELL: "Shell Sort", 
  BOGO: "Bogo Sort",
} as const; 

/**
 * An interface that details...
 *
 * @param interfaceParam This param represents...
*/

export const sortSettingsPanelOptions: SortOptionItem[] = (Object.keys(SortPanelOptions) as SortPanelOptionKeys[]).map((i) => {
  return { textContent: SortPanelOptions[i], key: i, isSelected: i === "BUBBLE" }
})

/**
 * POJO Enum
*/

export const SortAlgorithmVisualOptions = {
  BUBBLE: bubbleSortVisual,
  SELECTION: selectionSortVisual, 
  INSERTION: insertionSortVisual, 
  HEAP: heapSortVisual, 
  MERGE: mergeSortVisual, 
  QUICK: quickSortVisual, 
  RADIX: radixSortVisual, 
  SHELL: shellSortVisual, 
  BOGO: bogoSortVisual,
} as const;

/**
 * An enum that details...
*/

export const SortItemColorOptions = {
  NORMAL: "normal", 
  PIVOT: "pivot", 
  L_IDX: "larger-idx", 
  S_IDX: "smaller-idx", 
  SUBARR_BOUND: "sub-arr-bound",
}