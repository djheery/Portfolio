import { SortItemArray } from "../../../models/sort-models";

export function* radixSortVisual(arr: SortItemArray) {
  let max = getMax(arr); 
  for(let i = 0; i < max; i++) {
    let buckets = Array.from({length: 10}, () => []); 

    for(let j = 0; j < arr.length; j++) {
      let didgit = getDigit(arr[i][0], i); 

    };
  };
}

function getDigit(num: number, idx: number) {
  return Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10;  
}

function getMax(arr: SortItemArray): number {
  let max = arr[0][0];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i][0] > max) max = arr[i][0]; 
  };

  return String(max).length; 
}
