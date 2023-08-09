import SortingAlgorithmSettings from "./SortingAlgorithmSettings";
import SortingAlgorithmVisualizer from "./SortingAlgorithmVisualizer";
import SortItem from "./SortItem";

class SortingAlgorithmDriver {
  constructor() { 
    this.logicDriver = new SortingAlgorithmVisualizer();
    this.algorithmSpeed = 50; 
    this.settingsDriver = new SortingAlgorithmSettings(this, this.logicDriver);
  }

  public startSort() {
    this.logicDriver.startSorting();
  }

  public stopSort() {

  }

  public stepThroughSort() {

  }

  public shuffle() {

  }

  public resetArray() {
    this.logicDriver.resetArray();
  }

  get getSortItems(): SortItem[] {
    return this.logicDriver.getSortItems;
  }

  public setAlgorithmSpeed(newSpeed: number) {
    if(newSpeed < 20 || newSpeed === this.algorithmSpeed) return; 
    this.algorithmSpeed = newSpeed; 
  }

  private logicDriver: SortingAlgorithmVisualizer;
  private settingsDriver: SortingAlgorithmSettings;
  private algorithmSpeed: number; 
}

export default SortingAlgorithmDriver; 