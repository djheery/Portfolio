import { SortOptionItem } from "../models/sort-models";
import { ObjectKeys, ObjectValues } from "@/app/models/global-types";

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * This param represents...
*/

export const swap = (sortItemArray: number[], i: number, j: number) => {
  [sortItemArray[j], sortItemArray[i]] = [sortItemArray[i], sortItemArray[j]]; 
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
 * A type for...
*/

export type SortPanelOptionKeys = ObjectKeys<typeof SortPanelOptions>;

/**
 * A type for...
*/

export type SortPanelOptionValues = ObjectValues<typeof SortPanelOptions>;

/**
 * An interface that details...
 *
 * @param interfaceParam This param represents...
*/

export const sortSettingsPanelOptions: SortOptionItem[] = (Object.keys(SortPanelOptions) as SortPanelOptionKeys[]).map((i) => {
  return { textContent: SortPanelOptions[i], key: i }
})
