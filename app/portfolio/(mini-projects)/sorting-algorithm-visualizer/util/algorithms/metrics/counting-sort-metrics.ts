import { SortItemArray } from "../../../models/sort-models";

/* 
 * This is the setup method for counting sort. 
 * This sorting method is commonly used as a subroutine of Radix Sort
 * 
 * @param: arr - A copy of the SortItemArray to be sorted 
 * @returns: The sorted array.  
 */

export function countingSort(arr: SortItemArray) {
  let maxNum = getMax(arr) + 1;  
  let countArray: number[] = new Array(maxNum).fill(0); 

  countItemsInArray(countArray, arr); 
  accumulateHelper(countArray); 
  const outputArr = populateNewArray(countArray, arr); 
  return outputArr;
}

/* 
 * A helper method to get the max number in an array
 * 
 * @param: arr - A copy of the SortItemArray to be sorted 
 * @returns: The max number in the given array 
 */

function getMax(arr: SortItemArray): any {
  let max = -1; 
  for(let i = 0; i < arr.length; i++) {
    if(arr[i][0] > max) max = arr[i][0]; 
  }

  return max; 
}

/* 
 * A utility method used to count the number of time a specific number appears in the array
 * This method manipulates the count array, thus could be seen to implicitly return a new array 
 * 
 * @param: countArray - An array that contains the count of each number 
 * @param: arr - A copy of the SortItemArray
 */

function countItemsInArray(countArray: number[], arr: SortItemArray) {
  for(let i = 0; i < arr.length; i++) {
    countArray[arr[i][0]] += 1; 
  }; 
}

/* 
 * A utility method used to perform the cumulative sum of each index based on their count 
 * This method manipulates the count array, thus could be seen to implicitly return a new array 
 *
 * @param: countArray - An array that contains the count of each number in the original array.  
 */

function accumulateHelper(countArray: number[]) {
  for(let j = 1; j < countArray.length; j++){
    let k = j - 1; 
    countArray[j] = countArray[j] + countArray[k];
  };
}

/* 
 * A utility method to create a new sorted array based on the state of the countArray
 * 
 * @param: countArray - An array that contains the count and Cumlative value of each number in the Original array
 * @param: arr - A copy of the SortItemArray
 * @returns: This returns a new sorted version of the original array. 
 */

function populateNewArray(countArray: number[], arr: SortItemArray) {
  const newArr = JSON.parse(JSON.stringify(arr)); 
  for(let l = arr.length - 1; l >= 0; l--) {
    let idx = countArray[arr[l][0]];
    newArr[idx - 1] = arr[l][0];
    countArray[arr[l][0]]--; 
  };

  return newArr; 
}

