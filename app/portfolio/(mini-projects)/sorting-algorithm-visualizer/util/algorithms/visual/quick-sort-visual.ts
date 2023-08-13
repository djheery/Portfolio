import { SortItemArray, SwapFn } from "../../../models/sort-models";
import { swap } from "../../sort-visualizer-helpers";

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/


export function* quickSortVisual(sortItemArray: SortItemArray) {
  const array = JSON.parse(JSON.stringify(sortItemArray)); 
  const n = array.length - 1; 
  yield* quickSortHelper(array, 0, n);
  yield {action: "complete", indicies: [-1, -1]}
}

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/

function* quickSortHelper(array: SortItemArray, start:number, end:number): any {
  
  if(start < end) {
    let p = yield* partition(array, start, end);
    yield* quickSortHelper(array, start, p - 1); 
    yield* quickSortHelper(array, p + 1, end);
  }
}

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/

function* partition(array: SortItemArray, start: number, end: number): any {
  let pivot =  array[end][0]; 
  let i = start - 1; 
  
  for(let j = start; j <= end - 1; j ++) {
    if(array[j][0] < pivot) {
      i++;
      swap(array, i, j);
      yield { action: "swap", indicies: [i, j]}
    }
  }

  swap(array, i + 1, end); 
  yield {action: "swap", indicies: [i + 1, end]}

  return i + 1; 
}