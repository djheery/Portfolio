import { SortItemArray, SwapFn } from "../../../models/sort-models";

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/

export const insertionSortVisual = async (sortItemArray: SortItemArray, swap: SwapFn) => {
  for(let i = 1; i < sortItemArray.length; i++) {
    let j = i;
    let k = j - 1; 
    while(j > 0 && sortItemArray[j][0] < sortItemArray[k][0]) {
      await swap(j, k);
      j--; 
      k--; 
    }
  }
}