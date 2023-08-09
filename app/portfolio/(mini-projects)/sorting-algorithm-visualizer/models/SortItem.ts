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
  isCurrent: boolean;
  index: number;
  begHeight: number; 
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

  get getValue() {
    return this.sortValue; 
  }

  get getSortIndex() {
    return this.sortIndex; 
  }

  get getSortItemValues() {
    let width = 10; 
    return {
      width: width, 
      left: 0 + (this.sortIndex * width), 
      height: this.sortValue,
      isCurrent: this.isCurrent,
      index: this.sortIndex,
      begHeight: this.begHeight
    }
  }

  private isCurrent: boolean;
  private sortIndex: number; 
  private begHeight: number; 
  private sortValue: number; 
  private uiComponentStateAction?: StateAction<SortItemProps>;
}

export default SortItem; 