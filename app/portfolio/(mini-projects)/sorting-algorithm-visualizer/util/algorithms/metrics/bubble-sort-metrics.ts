import { swap } from "../../sort-visualizer-helpers";

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/

export const bubbleSortMetrics = async (sortItemArray: number[]) => {
  let fullArrayIterations = 0; 
  let numberOfSteps = 0; 
  let swaps = 0; 
  
  let sorted = false; 
  let counter = sortItemArray.length - 1; 
  
  while(!sorted) {
    let sorted = true; 
    fullArrayIterations++; 
    for(let i = 0; i < counter; i++) {
      numberOfSteps++; 
      let j = i + 1;
      if(sortItemArray[i] > sortItemArray[j]) {
        sorted = false; 
        swap(sortItemArray, i, j);
        swaps++; 
      }
    }
  }

  return [fullArrayIterations, numberOfSteps, swaps];
}