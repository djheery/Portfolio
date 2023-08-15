import { log } from "console";
import { SortItemArray } from "../../../models/sort-models";
import { swap } from "../../sort-visualizer-helpers";

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * @returns This method returns...
*/

export function* selectionSortVisual(sortItemArray: SortItemArray) {
  const arr = JSON.parse(JSON.stringify(sortItemArray));
  let n = arr.length;
  let prevMin;

  for (let i = 0; i < n; i++) {
    prevMin = i;
    let min = i;

    let actionsBatch = [];

    for (let j = i + 1; j < n; j++) {
      if (arr[j][0] < arr[min][0]) {
        min = j;
      }
    }

    if (min !== i) {
      swap(arr, i, min)
      actionsBatch.push({ action: "highlight min", indicies: [min, prevMin]})
      actionsBatch.push({ action: "swap", indicies: [min, i] });
      yield actionsBatch; 
    }

    yield [{ action: "remove min", indicies: [min, -1] }];


  }

  console.log("Completed");
  
}
