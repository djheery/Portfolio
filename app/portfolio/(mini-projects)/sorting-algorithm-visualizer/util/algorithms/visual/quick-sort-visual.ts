import { SortItemArray, SwapFn } from "../../../components/models/sort-models";

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * This param represents...
*/

export const quickSortVisual = async (sortItemArray: SortItemArray, swap: SwapFn) => {
  const n = sortItemArray.length - 1; 
  quickSortHelper(sortItemArray, 0, n, swap);
}

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * This param represents...
*/

const quickSortHelper = async (
  sortItemArray: SortItemArray, 
  start: number, 
  end: number, swap: 
  SwapFn) => {

  if(start < end) {
    let p = await partition(sortItemArray, start, end, swap); 
    quickSortHelper(sortItemArray, start, p - 1, swap);
    quickSortHelper(sortItemArray, p + 1, end, swap);
  }
}

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * This param represents...
*/

const partition = async (
  sortItemArray: SortItemArray, 
  start: number, 
  end: number, 
  swap: SwapFn) => {
  
  let pivot =  sortItemArray[end][0]; 
  let i = start - 1; 
  
  for(let j = start; j <= end - 1; j ++) {
    if(sortItemArray[j][0] < pivot) {
      i++;
      await swap(i, j);
    }
  }

  await swap(i + 1, end); 

  return i + 1; 
}

