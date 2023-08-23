import { SortItemArray } from "../../../models/sort-models";
import { setAtIndex } from "../../sort-visualizer-helpers";

/**
 * A method for visualizing the Merge Sort Algorithm 
 * You can view more about the merge sort algorithm at the link below: 
 *
 * https://www.digitalocean.com/community/tutorials/merge-sort-algorithm-java-c-python
 *
 * I have use a generator pattern to visualize each step of the algorithm 
 *
 * @param: sortItemArray A reference to the current sort Item array 
 * @returns: This method returns yields where the action denotes the relevant action to be taken and the indices represents the indicies to be manipulate
*/

export function* mergeSortVisual(sortItemArray: SortItemArray) {
  const arr = JSON.parse(JSON.stringify(sortItemArray));
  let startIdx = 0; 
  let endIdx = arr.length - 1; 

  yield* mergeSortHelper(arr, startIdx, endIdx);

}

/**
 * A helper method for visualizing the merge sort algorithm  
 *
 * I have use a generator pattern to visualize each step of the algorithm 
 *
 * @param: sortItemArray A reference to the current sort Item array 
 * @param: startIdx - The beginning index of the the sub array/ whole array 
 * @param: endIdx - The end i9ndex of the sub array/ whole array
 * @returns: This method returns yields where the action denotes the relevant action to be taken and the indices represents the indicies to be manipulate
*/

function* mergeSortHelper(arr: SortItemArray, startIdx:number, endIdx:number):any {
   if(startIdx < endIdx) {    
    const midIdx = startIdx + Math.floor((endIdx - startIdx) / 2);
    yield* mergeSortHelper(arr, startIdx, midIdx);
    yield* mergeSortHelper(arr, midIdx + 1, endIdx);
    yield* merge(arr, startIdx, midIdx, endIdx); 
  }
}

/**
 * The merge method for the Merge sort algorithm  
 *
 * I have use a generator pattern to visualize each step of the algorithm 
 *
 * @param: sortItemArray A reference to the current sort Item array 
 * @param: startIdx - The startIdx of the to merge 
 * @param: midIdx - The midIdx of the the subarray to merge 
 * @param: endIdx - The endIdx of the subarray to merge
 * @returns: This method returns yields where the action denotes the relevant action to be taken and the indices represents the indicies to be manipulate
*/

function* merge(arr: SortItemArray, startIdx: number, midIdx: number, endIdx: number): any {
  const subArrayOneLength = midIdx - startIdx + 1;
  const subArrayTwoLength = endIdx - midIdx; 

  const subArrayOne = new Array(subArrayOneLength); 
  const subArrayTwo = new Array(subArrayTwoLength);

  yield* highlightBoundHelper(startIdx, midIdx, subArrayOneLength, subArrayTwoLength); 

  for(let i = 0; i < subArrayOneLength; i++) 
    subArrayOne[i] = arr[startIdx + i][0];
  for(let j = 0; j < subArrayTwoLength; j++) 
    subArrayTwo[j] = arr[midIdx + 1 + j][0]; 
  
  let subOneIdx = 0, subTwoIdx = 0, mergedIdx = startIdx;
  
  while(subOneIdx < subArrayOneLength && subTwoIdx < subArrayTwoLength) {
    if(subArrayOne[subOneIdx] <= subArrayTwo[subTwoIdx]) {
      setAtIndex(arr, mergedIdx, subArrayOne[subOneIdx]);
      yield [{   action: "set at index", indicies: [mergedIdx, subArrayOne[subOneIdx]] } ]
      subOneIdx++;
    } else {
      yield [{  action: "set at index", indicies: [mergedIdx, subArrayTwo[subTwoIdx]] } ]
      setAtIndex(arr, mergedIdx, subArrayTwo[subTwoIdx]);
      subTwoIdx++;
    }

    yield [{action: "remove min", indicies: [mergedIdx, - 1]}]

    mergedIdx++;
  }

  while(subOneIdx < subArrayOneLength) {
    setAtIndex(arr, mergedIdx, subArrayOne[subOneIdx]);
    yield [{  action: "set at index", indicies: [mergedIdx, subArrayOne[subOneIdx]] } ]
    subOneIdx++; 
    mergedIdx++; 
  }

  while (subTwoIdx < subArrayTwoLength) {
    setAtIndex(arr, mergedIdx, subArrayTwo[subTwoIdx]);
    yield [{  action: "set at index", indicies: [mergedIdx, subArrayTwo[subTwoIdx]] } ]
    subTwoIdx++;
    mergedIdx++; 
  }
}

/* 
 * A helper function for visualizing the bounds 
 * This only exists to abstract this logic from the merge function and not to bloat it. 
 * 
 * @param: startIdx, midIdx - These are parameters for the start of the two sub bounds 
 * @param: subOneLength, subTwoLength - These are parameters to be used to calculate the end Idx of the bounds
 * */

function* highlightBoundHelper(startIdx: number, midIdx: number, subOneLength: number, subTwoLength: number): any {
  let actionBatch = []
  const subOneEnd = startIdx + subOneLength; 
  const subTwoEnd = midIdx + subTwoLength;
  actionBatch.push({ action: "highlight bound", indicies: [startIdx, subTwoEnd], bound: 1})
  actionBatch.push({ action: "highlight bound", indicies: [midIdx, subOneEnd], bound: 1})
  yield actionBatch;

}

/* 
 * Remove the highlight colours on the bound
 * 
 * @param: startIdx, midIdx - These are parameters for the start of the two sub bounds 
 * @param: subOneLength, subTwoLength - These are parameters to be used to calculate the end Idx of the bounds
 */

function* removeBoundHighlight(startIdx: number, midIdx: number, subOneLength: number, subTwoLength: number): any {
  let actionBatch = []
  const subOneEnd = startIdx + subOneLength; 
  const subTwoEnd = midIdx + subTwoLength;
  actionBatch.push({ action: "remove bound", indicies: [startIdx, subTwoEnd] })
  actionBatch.push({ action: "remove bound", indicies: [midIdx, subOneEnd]})
  yield actionBatch;

}
