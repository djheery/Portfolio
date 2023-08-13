import { RefObject } from "react";
import { SortItemArray, SwapFn } from "../../../models/sort-models";
import { swap } from "../../sort-visualizer-helpers";


export function* bubbleSortVisual(sortItemArray: SortItemArray) {
  let array = JSON.parse(JSON.stringify(sortItemArray));
  let sorted = false;  
  let counter = sortItemArray.length - 1; 
  while(!sorted) {
    let swapped = false; 
    sorted = true;
    for(let i = 0; i < counter; i++) {
      let j = i + 1; 
      if(array[i][0] > array[j][0]) {
        swap(array, i, j);
        sorted = false; 
        swapped = true; 
        yield { action: "swap", indicies: [i, j]}; 
      }
      
      if(!swapped) yield { action: "compare", indicies: [i, j] };
    } 

    counter--; 
  }

  yield { action: "complete", indicies: [-1, -1] };
}

 // if(currentSortingAlgorithm === "MERGE") 
    //   await SortAlgorithmVisualOptions[currentSortingAlgorithm](sortItemArray, setAtIndex);
    // else 
    //   await SortAlgorithmVisualOptions[currentSortingAlgorithm](sortItemArray, swap);
