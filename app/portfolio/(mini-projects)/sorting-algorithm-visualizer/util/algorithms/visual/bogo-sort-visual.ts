import { animationDebounce } from "@/app/util/debounce";
import { addSyntheticLeadingComment } from "@/node_modules/typescript/lib/typescript";
import { SortItemArray, SwapFn } from "../../../models/sort-models"
import { swap } from "../../sort-visualizer-helpers";

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/

export function* bogoSortVisual(sortItemArray: SortItemArray) {
  const arr = JSON.parse(JSON.stringify(sortItemArray))
  let iterationCount = 0;
  let isSorted = false;  
  let n = sortItemArray.length;
  while(iterationCount !== 1000 && !isSorted) {
    
    for(let i = 0; i < n; i++) {
      let idx1 = Math.floor(Math.random() * (n)); 
      let idx2 = Math.floor(Math.random() * (n));
      swap(arr, idx1, idx2);
      yield {action: "swap", indicies: [idx1, idx2]}
    }

    isSorted = checkSorted(sortItemArray);
    
    iterationCount++; 
  }
}

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/

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