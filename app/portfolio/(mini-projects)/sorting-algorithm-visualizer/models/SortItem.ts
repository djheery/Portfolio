import { StateAction } from "@/app/models/global-types";

class SortItem {
  constructor(sortValue: number) {
    this.sortValue = sortValue; 
  }

  public sortValueChange(sortValue: number) {
    this.sortValue = sortValue;
    this.uiComponentStateAction!(this.sortValue);
  }

  public registerSortItem(stateAction: StateAction<number>) {
    this.uiComponentStateAction = stateAction; 
  }

  private sortValue: number; 
  private uiComponentStateAction?: StateAction<number>;
}

export default SortItem; 