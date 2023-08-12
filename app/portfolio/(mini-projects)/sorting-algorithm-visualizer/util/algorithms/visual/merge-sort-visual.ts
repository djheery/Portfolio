import { SetAtIndexFn, SortItemArray } from "../../../models/sort-models";

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/

export const mergeSortVisual = async (
  sortItemArray: SortItemArray,  
  setAtIndex: SetAtIndexFn) => {
    const start = 0; 
    const end = sortItemArray.length - 1; 

    await mergeSortHelper(sortItemArray, start, end, setAtIndex);
}

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/

const mergeSortHelper = async (
  sortItemArray: SortItemArray, 
  start: number, 
  end: number, 
  setAtIndex: SetAtIndexFn
) => {
  if(start < end) {    
    const mid = start + Math.floor((end - start) / 2);
    await mergeSortHelper(sortItemArray, start, mid, setAtIndex);
    await mergeSortHelper(sortItemArray, mid + 1, end, setAtIndex);
    await merge(sortItemArray, start, mid, end, setAtIndex); 
  }

}

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/

const merge = async (
  sortItemArray: SortItemArray, 
  start: number,
  mid: number,  
  end: number, 
  setAtIndex: SetAtIndexFn
) => {

  const subArrayOneLength = mid - start + 1;
  const subArrayTwoLength = end - mid;  

  const subArrayOne = new Array(subArrayOneLength); 
  const subArrayTwo = new Array(subArrayTwoLength);

  for(let i = 0; i < subArrayOneLength; i++) 
    subArrayOne[i] = sortItemArray[start + i][0];
  for(let j = 0; j < subArrayTwoLength; j++) 
    subArrayTwo[j] = sortItemArray[mid + 1 + j][0]; 
  
  let subOneIdx = 0, subTwoIdx = 0, mergedIdx = start;
  
  while(subOneIdx < subArrayOneLength && subTwoIdx < subArrayTwoLength) {
    if(subArrayOne[subOneIdx] <= subArrayTwo[subTwoIdx]) {
      await setAtIndex(mergedIdx, subArrayOne[subOneIdx]);
      subOneIdx++;
    } else {
      await setAtIndex(mergedIdx, subArrayTwo[subTwoIdx]);
      subTwoIdx++;
    }

    mergedIdx++;
  }

  while(subOneIdx < subArrayOneLength) {
    await setAtIndex(mergedIdx, subArrayOne[subOneIdx]);
    subOneIdx++; 
    mergedIdx++; 
  }

  while (subTwoIdx < subArrayTwoLength) {
    await setAtIndex(mergedIdx, subArrayTwo[subTwoIdx]);
    subTwoIdx++;
    mergedIdx++; 
  }


}