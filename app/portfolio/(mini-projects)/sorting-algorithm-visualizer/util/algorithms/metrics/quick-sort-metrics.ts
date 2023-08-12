import { swap } from "../../sort-visualizer-helpers";


/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/

export const quickSortMetrics = (arr: number[], start: number, end: number) => {
  if(start < end) {
    const p = partition(arr, start, end); 
    quickSortMetrics(arr, start, p - 1);
    quickSortMetrics(arr, p + 1, end); 
  }
}

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/

const partition = (arr: number[], start: number, end: number): number => {
  const pivot = arr[end]; 
  let i = start - 1; 

  for(let j = 0; j < end; j++) {
    if(arr[i] < pivot) {
      i++; 
      swap(arr, i, j)
    }
  }

  swap(arr, i+1, j); 

  return i + 1; 
}

