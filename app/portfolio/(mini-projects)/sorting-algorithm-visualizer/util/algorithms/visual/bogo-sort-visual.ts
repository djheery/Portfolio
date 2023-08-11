import { animationDebounce } from "@/app/util/debounce";
import { addSyntheticLeadingComment } from "@/node_modules/typescript/lib/typescript";
import { SortItemArray, SwapFn } from "../../../components/models/sort-models"

export const bogoSortVisual = async (sortItemArray: SortItemArray, swap: SwapFn) => {
  let iterationCount = 0;
  let isSorted = false;  
  let n = sortItemArray.length;
  while(iterationCount !== 1000 && !isSorted) {
    
    for(let i = 0; i < n; i++) {
      let idx1 = Math.floor(Math.random() * (n)); 
      let idx2 = Math.floor(Math.random() * (n));
      await swap(idx1, idx2) ;
    }

    isSorted = checkSorted(sortItemArray);
    
    iterationCount++; 
  }
}

const checkSorted = (sortItemArray: SortItemArray) => {
  const n = sortItemArray.length; 
  let isSorted = true; 
  for(let i = 0; i < n; i++) {
    let j = i + 1; 
    if(sortItemArray[i][0] > sortItemArray[j][0]) {
      isSorted = false; 
      break;
    }
  }

  return isSorted; 
}