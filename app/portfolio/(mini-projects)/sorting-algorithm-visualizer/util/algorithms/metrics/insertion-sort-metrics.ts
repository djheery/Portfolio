import { SortItemArray } from "../../../models/sort-models";
import { swap } from "../../sort-visualizer-helpers";

export const insertionSortMetrics = (arr: number[][]) => {
const metrics = {
    swapCount: 0, 
    runTime: 0, 
    steps: 0, 
    runtimeComplexity: "O(n^2)"
  }

  const startTime = Date.now();

  for(let i = 1; i < arr.length; i++) {
    let j = i;
    let k = i - 1; 
    while(j > 0 && arr[j] < arr[k]) {
      swap(arr as SortItemArray, j, k); 
      metrics.swapCount++; 
      metrics.steps++;
      j--; 
      k--; 
    };
    metrics.steps++;
  }

  let runtime = Date.now() - startTime; 
  metrics.runTime = runtime; 
  return metrics; 
}
