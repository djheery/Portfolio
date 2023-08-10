"use client"
import { StateAction } from "@/app/models/global-types";

/**
 * Sort Item Props
 *
 * @param left The left position of the bar 
 * @param height The % height of the container
*/

export interface SortItemProps {
  width: number, 
  left: number,
  height: number,
}

class SortItem {
  constructor(sortValue: number, sortIndex: number) {
    this.sortValue = sortValue; 
    this.sortIndex = sortIndex; 
    this.isCurrent = false;
    this.begHeight = sortValue; 
  }

  public changeIndex(sortIndex: number) {
    this.sortIndex = sortIndex; 
    this.uiComponentStateAction!(this.getSortItemValues);
  }

  public changeValue(sortValue: number) {
    this.sortValue = sortValue;   
    this.uiComponentStateAction!(this.getSortItemValues);
  }

  public registerStateAction(stateAction: StateAction<SortItemProps>) {
    this.uiComponentStateAction = stateAction; 
  }

  public updateUI() {
    this.uiComponentStateAction!(this.getSortItemValues);
  }

  get getValue() {
    return this.sortValue; 
  }

  get getSortIndex() {
    return this.sortIndex; 
  }

  get getWidth() {
    return 10; 
  }

  get getLeft() {
    return 0 + (this.sortIndex * this.getWidth)
  }

  get getSortItemValues() {
    let width = 8.5; 
    return {
      width: width, 
      left: 0 + (this.sortIndex * width), 
      height: this.sortValue,
    }
  }

  private isCurrent: boolean;
  private sortIndex: number; 
  private begHeight: number; 
  private sortValue: number; 
  private uiComponentStateAction?: StateAction<SortItemProps>;
}

export default SortItem; 