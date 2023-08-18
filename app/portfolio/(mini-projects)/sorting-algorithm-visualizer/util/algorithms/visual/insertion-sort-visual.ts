import { arrayBuffer } from "stream/consumers";
import { SortItemArray, SwapFn } from "../../../models/sort-models";
import { swap } from "../../sort-visualizer-helpers";

/**
 * A method for visualizing the Insertion Sort sorting algorithm 
 * You can see more about this algorithm below:
 *
 * https://www.geeksforgeeks.org/insertion-sort/
 *
 * @param: sortItemArray A reference to the smain sortItemArray
 * @returns: This method returns yields for the visualization process
*/

export function* insertionSortVisual(sortItemArray: SortItemArray) {
  let arr = JSON.parse(JSON.stringify(sortItemArray)); 
  for(let i = 1; i < arr.length; i++) {
    let actionsBatch =[]
    let j = i; 
    let k = j - 1; 
    while(j > 0 && arr[j][0] < arr[k][0]) {
      swap(arr, j, k);
      actionsBatch.push({ action: "highlight min", indicies: [k, j]})
      actionsBatch.push({ action: "swap", indicies: [k, j] });
      yield actionsBatch;
      j--; 
      k--;
      actionsBatch = []; 
    }
    
    actionsBatch.push({ action: "remove min", indicies: [j, -1]});
    if(k >= 0)
      actionsBatch.push({ action: "remove min", indicies: [k, -1]}); 

    yield actionsBatch; 
    
  }
}
