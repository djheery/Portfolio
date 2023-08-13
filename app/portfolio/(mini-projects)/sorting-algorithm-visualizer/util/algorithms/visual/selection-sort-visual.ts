import { SortItemArray, SwapFn } from "../../../models/sort-models";
import { swap } from "../../sort-visualizer-helpers";

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/

export function* selectionSortVisual(sortItemArray: SortItemArray) {
  const arr = JSON.parse(JSON.stringify(sortItemArray));
  let n = arr.length;

  for(let i = 0; i < n; i++) {
    let min = i; 
    for(let j = i + 1; j < n; j++) {
      if(arr[j][0] < arr[min][0]) {
        min = j; 
      }
    }

    if(min !== i) {
      swap(arr, i, min)
      yield { action: "swap", indicies: [min, i]};
    }
  } 
}