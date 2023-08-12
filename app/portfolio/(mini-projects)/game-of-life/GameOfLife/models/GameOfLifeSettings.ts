import { StateAction } from "@/app/models/global-types";
import { NumberInputSettings } from "../components/SettingsPanel/NumberInput/NumberInput";
import GameOfLife from "./GameOfLife";
import GameOfLifeDriver from "./GameOfLifeDriver";

/**
 * An interface that details...
 *
 * @param interfaceParam This param represents...
*/

export interface LegendItem {
  name: string, 
  driverRegisterMethod: (method: StateAction<number>) => void,
  driverDestroyMethod: () => void,
  defaultValue: number,
  flag?: string,
}

/**
 * Describe your class...
*/

class GameOfLifeSettings {
  constructor(driver: GameOfLifeDriver) {
    this.driver = driver; 
    this.game = driver.getGame
    this.alivePercentageShowing = true; 
    this.currentEvolutionShowing = true; 
    this.aliveCountShowing = false; 
    this.algorithmDurationShowing = false; 
    this.isShowing = false; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public setWarpZoneEnabled(isEnabled: boolean) {
    this.game.setWarpZoneEnabled(isEnabled);
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public setPopulationDensity(populationDensity: number) {
    this.game.setPopulationDensity(populationDensity / 100);
    this.game.getNewGrid;
    this.legendStateAction!(this.getLegend)
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public setEvolutionDuration(evolutionDuration: number) {
    this.driver.setEvolutionDuration(evolutionDuration); 
    this.legendStateAction!(this.getLegend)
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public setAlivePercentageShowing() {
    this.alivePercentageShowing = !this.alivePercentageShowing; 
    this.legendStateAction!(this.getLegend);
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public setAliveCountShowing() {
    this.aliveCountShowing = !this.aliveCountShowing;
    this.legendStateAction!(this.getLegend);
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public setCurrentEvolutionShowing(isEnabled: boolean) {
    this.currentEvolutionShowing = isEnabled; 
    this.legendStateAction!(this.getLegend);
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public setActualDurationShowing(isEnabled: boolean) {
    this.algorithmDurationShowing = isEnabled; 
    this.legendStateAction!(this.getLegend);
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public showPanel() {
    this.isShowing = !this.isShowing; 
    this.settingsPanelStateAction!(this.isShowing);
    if(this.isShowing) this.driver.pauseEvolution();
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public registerSettingsPanelStateAction(stateAction: StateAction<boolean>) {
    this.settingsPanelStateAction = stateAction; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  get getCurrentPopulationDensity() {
    return 0; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  get getEvolutionDuration() {
    return this.driver.getEvolutionDuration; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  get getWarpZoneEnabled() {
    return this.game.getWarpZoneEnabled; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  get getCurrentEvolutionShowing() {
    return this.currentEvolutionShowing; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  get getTimeEvolutionTook() {
    return this.driver.getEvolutionDuration; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  get getAlivePercentageShowing() {
    return this.alivePercentageShowing;
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  get getAliveCountShowing() {
    return this.aliveCountShowing; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  get getAlgorithmDurationShowing() {
    return this.algorithmDurationShowing
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  get getPopulationDensityInputSettings(): NumberInputSettings {
    return {
      name: "population-density", 
      min: 1, 
      max: 100, 
      value: this.game.getPopulationDensity * 100, 
      step: 1, 
      flag: this.populationDensityFlag,
      default: 45, 
      callback: this.setPopulationDensity.bind(this)
    }
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  get getEvolutionDurationInputSettings(): NumberInputSettings {
    return {
      name: "evolution-duration", 
      min: 20, 
      max: 1000, 
      value: 30, 
      step: 10, 
      flag: this.evolutionDurationFlag,
      default: 30,
      callback: this.setEvolutionDuration.bind(this)
    }
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  get getLegend() {
    const legendSet = new Set<LegendItem>(); 
    if(this.currentEvolutionShowing) {
      legendSet.add({
        name: "Current Evolution", 
        driverRegisterMethod: this.driver.registerEvolutionCounter.bind(this.driver), 
        driverDestroyMethod: this.driver.destroyEvolutionCounter.bind(this.driver),
        defaultValue: this.game.getCurrentEvolution
      })
    }

    if(this.alivePercentageShowing) {
      legendSet.add({
        name: "Alive Percentage",
        driverRegisterMethod: this.driver.registerAlivePercentageMethod.bind(this.driver),
        driverDestroyMethod: this.driver.destroyAlivePercentageMethod.bind(this.driver),
        defaultValue: this.game.getAlivePercentage,
        flag: "%",
      })
    }

    if(this.aliveCountShowing) {
      legendSet.add({
        name: "Alive Count",
        driverRegisterMethod: this.driver.registerAliveCountMethod.bind(this.driver),
        driverDestroyMethod: this.driver.destroyAliveCountMethod.bind(this.driver),
        defaultValue: this.game.getCurrentAliveCount,
      })
    }

    if(this.algorithmDurationShowing) {
      legendSet.add({
        name: "Real Duration", 
        driverRegisterMethod: this.driver.registerAlgorithmPerformanceMethod.bind(this.driver), 
        driverDestroyMethod: this.driver.destroyAlgorithmPerformanceMethod.bind(this.driver),
        defaultValue: this.game.getAlgorithmDuration,
        flag: "(Ms)"
      })
    }
    
    return legendSet; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public registerLegendPanelStateAction(stateMethod: StateAction<Set<LegendItem>>) {
    this.legendStateAction = stateMethod; 
  }


  private evolutionDurationFlag = "Ms" as const;
  private populationDensityFlag = "%" as const; 
  private driver: GameOfLifeDriver; 
  private game: GameOfLife;
  private alivePercentageShowing: boolean; 
  private algorithmDurationShowing: boolean; 
  private currentEvolutionShowing: boolean; 
  private aliveCountShowing: boolean; 
  private isShowing: boolean;
  private settingsPanelStateAction?: StateAction<boolean>;
  private legendStateAction?: StateAction<Set<LegendItem>>
}

export default GameOfLifeSettings; 