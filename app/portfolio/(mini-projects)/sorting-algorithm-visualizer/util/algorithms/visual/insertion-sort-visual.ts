import { arrayBuffer } from "stream/consumers";
import { SortItemArray, SwapFn } from "../../../models/sort-models";
import { swap } from "../../sort-visualizer-helpers";

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/

export function* insertionSortVisual(sortItemArray: SortItemArray) {
  let arr = JSON.parse(JSON.stringify(sortItemArray)); 
  for(let i = 1; i < arr.length; i++) {
    let actionsBatch =[]
    let j = i; 
    let k = j - 1; 
    while(j > 0 && arr[j][0] < arr[k][0]) {
      swap(arr, j, k);
      actionsBatch.push({ action: "highlight min", indicies: [k, j]})
      actionsBatch.push({ action: "swap", indicies: [k, j] });
      yield actionsBatch;
      j--; 
      k--;
      actionsBatch = []; 
    }
    yield [{ action: "remove min", inidcies: [j, -1]}];
  }
}
