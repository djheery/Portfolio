import { SortItemArray, SwapFn } from "../../../models/sort-models";

export const selectionSortVisual = async (sortItemArray: SortItemArray, swap: SwapFn) => {
  let n = sortItemArray.length; 

  for(let i = 0; i < n; i++) {
    let min = i; 
    for(let j = i + 1; j < n; j++) {
      if(sortItemArray[j][0] < sortItemArray[min][0]) {
        min = j;
      }
    }
    
    if(i !== min) 
      await swap(i, min); 
  }
}