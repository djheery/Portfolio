import { SetAtIndexFn, SortItemArray } from "../../../models/sort-models";
import { setAtIndex } from "../../sort-visualizer-helpers";

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/

export function* mergeSortVisual(sortItemArray: SortItemArray) {
  const arr = JSON.parse(JSON.stringify(sortItemArray));
  let start = 0; 
  let end = arr.length - 1; 

  yield* mergeSortHelper(arr, start, end);

}

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/

function* mergeSortHelper(arr: SortItemArray, start:number, end:number):any {
   if(start < end) {    
    const mid = start + Math.floor((end - start) / 2);
    yield* mergeSortHelper(arr, start, mid);
    yield* mergeSortHelper(arr, mid + 1, end);
    yield* merge(arr, start, mid, end); 
  }
}

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/

function* merge(arr: SortItemArray, start: number, mid: number, end: number): any {
  const subArrayOneLength = mid - start + 1;
  const subArrayTwoLength = end - mid;  

  const subArrayOne = new Array(subArrayOneLength); 
  const subArrayTwo = new Array(subArrayTwoLength);

  for(let i = 0; i < subArrayOneLength; i++) 
    subArrayOne[i] = arr[start + i][0];
  for(let j = 0; j < subArrayTwoLength; j++) 
    subArrayTwo[j] = arr[mid + 1 + j][0]; 
  
  let subOneIdx = 0, subTwoIdx = 0, mergedIdx = start;
  
  while(subOneIdx < subArrayOneLength && subTwoIdx < subArrayTwoLength) {
    if(subArrayOne[subOneIdx] <= subArrayTwo[subTwoIdx]) {
      setAtIndex(arr, mergedIdx, subArrayOne[subOneIdx]);
      yield { action: "set at index", indicies: [mergedIdx, subArrayOne[subOneIdx]]}
      subOneIdx++;
    } else {
      yield { action: "set at index", indicies: [mergedIdx, subArrayTwo[subTwoIdx]]}
      setAtIndex(arr, mergedIdx, subArrayTwo[subTwoIdx]);
      subTwoIdx++;
    }

    mergedIdx++;
  }

  while(subOneIdx < subArrayOneLength) {
    setAtIndex(arr, mergedIdx, subArrayOne[subOneIdx]);
    yield { action: "set at index", indicies: [mergedIdx, subArrayOne[subOneIdx]]}
    subOneIdx++; 
    mergedIdx++; 
  }

  while (subTwoIdx < subArrayTwoLength) {
    setAtIndex(arr, mergedIdx, subArrayTwo[subTwoIdx]);
    yield { action: "set at index", indicies: [mergedIdx, subArrayTwo[subTwoIdx]]}
    subTwoIdx++;
    mergedIdx++; 
  }


}