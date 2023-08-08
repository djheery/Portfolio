export enum AllowedAlogrithms {
  BUBBLE_SORT = "BUBBLE_SORT", 
  QUICK_SORT = "QUICK_SORT", 
  MERGE_SORT = "MERGE_SORT", 
  INSERTION_SORT = "INSERTION_SORT",
  BOGO_SORT = "BOGO_SORT", 
  SHELL_SORT = "SHELL_SORT", 
  RADIX_SORT = "RADIX_SORT", 
  HEAP_SORT = "HEAP_SORT", 
}

class SortingAlgorithmVisualizer {
  constructor() {
    this.sortItems = []; 
    this.currentAlgorithm = AllowedAlogrithms.BUBBLE_SORT; 
    this.sortItemSize = 100;
    this.newSortArray(); 
  }

  private newSortArray() {
    this.sortItems = [];
    for(let i = 0; i < this.sortItemSize; i++) {
      this.sortItems.push(Math.random())
    }
  }

  public resetArray() {
    this.newSortArray(); 
  }

  public getSortItems() {
    return this.sortItems; 
  }

  public startSorting() {

  }

  private updateGrid() {

  }

  private bubbleSort() {
    let sorted = false; 
    while(!sorted) {
      sorted = true; 
      
    }
  }

  private quickSort() {

  }

  private mergeSort() {

  }

  private insertionSort() {

  }

  private heapSort() {

  }

  private shellSort() {

  }

  private radixSort() {

  }

  private bogoSort() {

  }

  private sortItems: number[]; 
  private sortItemSize: number; 
  private currentAlgorithm: AllowedAlogrithms; 
}

export default SortingAlgorithmVisualizer;