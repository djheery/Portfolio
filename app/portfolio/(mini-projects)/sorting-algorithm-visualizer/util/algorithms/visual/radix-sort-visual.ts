import { SortItemArray } from "../../../models/sort-models";

/* 
 * Details about your method
 * 
 * @param: myParam
 * @returns: This returns
 */

export function* radixSortVisual(arr: SortItemArray) {
  let max = getMax(arr); 
  let copy = JSON.parse(JSON.stringify(arr)); 
  for(let i = 0; i < max; i++) {
    let buckets: any = Array.from({length: 10}, () => []); 

    for(let j = 0; j < copy.length; j++) {
      let digit = getDigit(copy[j][0], i); 
      if(digit !== undefined)  buckets[digit].push(copy[j]); 
    };

    copy = [].concat(...buckets); 
  };

  console.log(copy); 
}

/* 
 * Details about your method
 * 
 * @param: num - The num to get the place for  
 * @returns: This returns
 */

function getDigit(num: number, idx: number) {
  return Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10;  
}

/* 
 * Get the maximum number in the Array to be used by the Radix Sort Method
 * 
 * @param: arr - A copy of the sort Item array 
 * @returns: The length of the longest number. 
 */

function getMax(arr: SortItemArray): number {
  let max = arr[0][0];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i][0] > max) max = arr[i][0]; 
  };

  return String(max).length; 
}
