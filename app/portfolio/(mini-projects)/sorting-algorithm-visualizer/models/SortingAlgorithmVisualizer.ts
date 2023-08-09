"use client"
import SortItem from "./SortItem";

export enum AllowedAlogrithms {
  BUBBLE_SORT = "BUBBLE_SORT", 
  QUICK_SORT = "QUICK_SORT", 
  MERGE_SORT = "MERGE_SORT", 
  INSERTION_SORT = "INSERTION_SORT",
  SELECTIONE_SORT = "SELECTION_SORT",
  BOGO_SORT = "BOGO_SORT", 
  SHELL_SORT = "SHELL_SORT", 
  RADIX_SORT = "RADIX_SORT", 
  HEAP_SORT = "HEAP_SORT", 
}

class SortingAlgorithmVisualizer {
  constructor() {
    this.sortItems = []; 
    this.currentAlgorithm = AllowedAlogrithms.BUBBLE_SORT; 
    this.sortItemSize = 30;
    this.traceOn = true; 
  }

  private newSortArray() {
    this.sortItems = [];
    for(let i = 0; i < this.sortItemSize; i++) {
      const sortValue = Math.ceil(Math.random() * 100);
      const item = new SortItem(sortValue, i);
      this.sortItems.push(item);
    }

    this.toString();
  }

  public resetArray() {
    this.newSortArray(); 
  }

  get getSortItems() {
    return this.sortItems; 
  }

  public async startSorting() {
    const expectedArr = this.sortItems.map(m => m.getValue)
    console.log(expectedArr) 
    await this.bubbleSort();
    if(this.traceOn) this.checkSorted();
    if(this.traceOn) this.toString();
  }

  private updateGrid() {

  }

  private async sleep(ms = 20) {
    return new Promise((res) => setTimeout(res, ms));
  }

  private async swap(i: number, j: number) { 
    const temp = this.sortItems[i].getValue; 
    this.sortItems[i].changeValue(this.sortItems[j].getValue);
    this.sortItems[j].changeValue(temp);
    await this.sleep();
  }

  private async bubbleSort() {
    let sorted = false;
    let counter = this.sortItems.length - 1;  
    while(!sorted) {
      sorted = true; 
      for(let i = 0; i < counter; i++) {
        let j = i + 1;
        if(this.sortItems[i].getValue > this.sortItems[j].getValue) {
          sorted = false; 
          await this.swap(i, j);
        }
      }

      counter--;
    }
  }

  private async partition(startIdx: number, endIdx: number) {

    let pivot = this.sortItems[endIdx].getValue;
    let i = startIdx - 1; 

    for(let j = startIdx; j <= endIdx - 1; j++) {
      if(this.sortItems[j].getValue < pivot) {
        i++; 
        await this.swap(i, j);
      }
    }

    await this.swap(i + 1, endIdx);

    return i + 1; 
  }

  private async quickSort(start = 0, end = this.sortItems.length - 1) {
    if(start < end) {
      let p = await this.partition(start, end); 
      await this.quickSort(start, p - 1);
      await this.quickSort(p + 1, end);
    }
  }

  private merge() {

  }

  private mergeSort(start = 0, end = this.sortItems.length - 1) {
    if(start < end) {
      // Define the middle 
      // Call Merge sort on the start and mid 
      // Call merger sort on the mid + 1 and end 

    }
  }

  private async insertionSort() {
    for(let i = 1; i < this.sortItems.length; i++) {
      let j = i; 
      while(j > 0 && this.sortItems[j].getValue < this.sortItems[j - 1].getValue) {
        await this.swap(j - 1, j);
        j--; 
      }
    }
  }

  private async selectionSort() {
    for(let i = 0; i < this.sortItems.length; i++) {
      let min = i; 
      for(let j = i + 1; j < this.sortItems.length; j++) {
        if(this.sortItems[j].getValue < this.sortItems[min].getValue) {
          min = j; 
        }
      }

      await this.swap(min, i);
    }
  }

  private heapSort() {

  }

  private shellSort() {

  }

  private radixSort() {

  }

  private bogoSort() {

  }

  private toString() {
    let str = "[";
    for(let i = 0; i < this.sortItems.length; i++) {
      str += `${this.sortItems[i].getValue}, `;
    }  

    str += `]`;

    console.log(str)
  }

  private checkSorted() {
    let isValid = true; 
    
    for(let i = 0; i < this.sortItems.length - 1; i++) {
      if(this.sortItems[i].getValue > this.sortItems[i + 1].getValue) {
        isValid = false;
        console.log(i, this.sortItems[i], this.sortItems[i + 1])
        break; 
      }
    }

    console.log(isValid);
  }

  private sortItems: SortItem[]; 
  private sortItemSize: number; 
  private currentAlgorithm: AllowedAlogrithms; 
  private traceOn: boolean; 
}

export default SortingAlgorithmVisualizer;