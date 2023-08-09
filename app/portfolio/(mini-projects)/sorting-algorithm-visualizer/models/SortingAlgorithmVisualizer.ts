"use client"
import SortItem from "./SortItem";

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
    this.traceOn = true; 
    this.newSortArray(); 
  }

  private newSortArray() {
    this.sortItems = [];
    for(let i = 0; i < this.sortItemSize; i++) {
      const sortValue = Math.ceil(Math.random() * 100);
      const item = new SortItem(sortValue < 2 ? 2 : sortValue, i);
      this.sortItems.push(item);
    }
  }

  public resetArray() {
    this.newSortArray(); 
  }

  public getSortItems() {
    return this.sortItems; 
  }

  public async startSorting() {
    const expectedArr = this.sortItems.map(m => m.getValue).sort((a, b) => a-b); 
    if(this.traceOn) this.toString();
    await this.bubbleSort();
    if(this.traceOn) this.toString();
    if(this.traceOn) console.log(`[${expectedArr}]`)
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

  private quickSort() {

  }

  private mergeSort() {

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

  private sortItems: SortItem[]; 
  private sortItemSize: number; 
  private currentAlgorithm: AllowedAlogrithms; 
  private traceOn: boolean; 
}

export default SortingAlgorithmVisualizer;