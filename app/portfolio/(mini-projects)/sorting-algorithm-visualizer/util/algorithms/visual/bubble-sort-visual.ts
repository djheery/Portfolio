import { RefObject } from "react";
import { SortItemArray, SwapFn } from "../../../models/sort-models";
import { swap } from "../../sort-visualizer-helpers";


export function* bubbleSortVisual(sortItemArray: SortItemArray) {
  let array = JSON.parse(JSON.stringify(sortItemArray));
  let sorted = false;  
  let counter = sortItemArray.length - 1; 
  while(!sorted) {
    let actionsBatch = []; 
    let swapped = false; 
    sorted = true;
    let prevMax = 0;
    for(let i = 0; i < counter; i++) {
      let j = i + 1; 
      if(array[i][0] > array[j][0]) {
        swap(array, i, j);
        sorted = false; 
        swapped = true;
        prevMax = j; 
        actionsBatch.push({ action: "highlight min", indicies: [j, i]})
        actionsBatch.push({ action: "swap", indicies: [i, j]});
        yield actionsBatch;
        actionsBatch = [];
      }
      
      yield [{action: "remove min", indicies: [prevMax, -2]}]
      if(!swapped) actionsBatch.push({ action: "compare", indicies: [i, j] });
    } 


    counter--; 
    
  }

  yield [{ action: "complete", indicies: [-1, -1] }];
}

 
