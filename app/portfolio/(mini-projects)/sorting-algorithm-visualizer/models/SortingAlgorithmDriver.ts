import SortingAlgorithmSettings from "./SortingAlgorithmSettings";
import SortingAlgorithmVisualizer from "./SortingAlgorithmVisualizer";

class SortingAlgorithmDriver {
  constructor() { 
    this.sortingLogicDriver = new SortingAlgorithmVisualizer();
    this.algorithmSpeed = 50; 
    this.settingsDriver = new SortingAlgorithmSettings(this, this.sortingLogicDriver);
  }

  public startSort() {

  }

  public stopSort() {

  }

  public stepThroughSort() {

  }

  public shuffle() {

  }

  public getSortItems(): number[] {
    return this.sortingLogicDriver.getSortItems();
  }

  public setAlgorithmSpeed(newSpeed: number) {
    if(newSpeed < 20 || newSpeed === this.algorithmSpeed) return; 
    this.algorithmSpeed = newSpeed; 
  }

  private sortingLogicDriver: SortingAlgorithmVisualizer;
  private settingsDriver: SortingAlgorithmSettings;
  private algorithmSpeed: number; 
}

export default SortingAlgorithmDriver; 