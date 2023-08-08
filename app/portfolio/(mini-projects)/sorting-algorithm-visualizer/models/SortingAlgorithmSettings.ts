import SortingAlgorithmDriver from "./SortingAlgorithmDriver";
import SortingAlgorithmVisualizer from "./SortingAlgorithmVisualizer";

class SortingAlgorithmSettings {
  constructor(driver: SortingAlgorithmDriver, logicDriver: SortingAlgorithmVisualizer) {
    this.driver = driver; 
    this.logicDriver = logicDriver; 
  }

  private driver: SortingAlgorithmDriver; 
  private logicDriver: SortingAlgorithmVisualizer; 
}

export default SortingAlgorithmSettings; 