import { SortItemArray } from "../../../models/sort-models";

export function* radixSortVisual(arr: SortItemArray) {
  let max = getMax(arr); 

}

function getMax(arr: SortItemArray): number {
  let max = arr[0][0];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i][0] > max) max = arr[i][0]; 
  };

  return max; 
}
