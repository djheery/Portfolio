import { SortItemArray, SwapFn } from "../../../models/sort-models";

export const bubbleSortVisual = async (sortItemArray: SortItemArray, swap: SwapFn) => {
  let sorted = false; 
  let counter = sortItemArray.length - 1; 
  
  while(!sorted) {
    let sorted = true; 
    for(let i = 0; i < counter; i++) {
      let j = i + 1;
      if(sortItemArray[i][0] > sortItemArray[j][0]) {
        sorted = false; 
        await swap(i, j);
      }
    }
  }
}
