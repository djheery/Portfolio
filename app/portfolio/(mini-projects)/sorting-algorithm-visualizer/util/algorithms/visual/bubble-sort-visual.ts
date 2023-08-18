import { SortItemArray, SwapFn } from "../../../models/sort-models";
import { swap } from "../../sort-visualizer-helpers";

/*
 * This method is used to visualize the BubbleSort Algorithm 
 * You can view more about this algorithm at the link below: 
 * 
 * https://www.programiz.com/dsa/bubble-sort
 *
 * I have use a generator pattern to visualize each step of the algorithm 
 *
 * @param: sortItemArray A reference to the current sort Item array 
 * @returns: This method returns yields where the action denotes the relevant action to be taken and the indices represents the indicies to be manipulate
 */

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

 
