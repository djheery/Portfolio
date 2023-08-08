import { StateAction } from "@/app/models/global-types";
import { NumberInputSettings } from "../components/SettingsPanel/NumberInput/NumberInput";
import GameOfLife from "./GameOfLife";
import GameOfLifeDriver from "./GameOfLifeDriver";

export interface LegendItem {
  name: string, 
  driverRegisterMethod: (method: StateAction<number>) => void,
  driverDestroyMethod: () => void,
  defaultValue: number,
  flag?: string,
}

class GameOfLifeSettings {
  constructor(driver: GameOfLifeDriver) {
    this.driver = driver; 
    this.game = driver.getGame
    this.alivePercentageShowing = true; 
    this.currentEvolutionShowing = true; 
    this.aliveCountShowing = false; 
    this.heatmapEnabled = false; 
    this.algorithmDurationShowing = false; 
    this.isShowing = false; 
  }

  public setWarpZoneEnabled(isEnabled: boolean) {
    this.game.setWarpZoneEnabled(isEnabled);
  }

  public setPopulationDensity(populationDensity: number) {
    this.game.setPopulationDensity(populationDensity / 100);
    this.game.getNewGrid;
    this.legendStateAction!(this.getLegend)
  }

  public setEvolutionDuration(evolutionDuration: number) {
    this.driver.setEvolutionDuration(evolutionDuration); 
    this.legendStateAction!(this.getLegend)
  }

  public setHeatMapShowing() {
    this.heatmapEnabled = !this.heatmapEnabled; 
  }

  public setAlivePercentageShowing() {
    this.alivePercentageShowing = !this.alivePercentageShowing; 
    this.legendStateAction!(this.getLegend);
  }

  public setAliveCountShowing() {
    this.aliveCountShowing = !this.aliveCountShowing;
    this.legendStateAction!(this.getLegend);
  }

  public setCurrentEvolutionShowing(isEnabled: boolean) {
    this.currentEvolutionShowing = isEnabled; 
    this.legendStateAction!(this.getLegend);
  }

  public setActualDurationShowing(isEnabled: boolean) {
    this.algorithmDurationShowing = isEnabled; 
    this.legendStateAction!(this.getLegend);
  }

  public showPanel() {
    this.isShowing = !this.isShowing; 
    this.settingsPanelStateAction!(this.isShowing);
    if(this.isShowing) this.driver.pauseEvolution();
  }

  public registerSettingsPanelStateAction(stateAction: StateAction<boolean>) {
    this.settingsPanelStateAction = stateAction; 
  }

  get getCurrentPopulationDensity() {
    return 0; 
  }

  get getEvolutionDuration() {
    return this.driver.getEvolutionDuration; 
  }

  get getWarpZoneEnabled() {
    return this.game.getWarpZoneEnabled; 
  }

  get getHeatMapEnabled() {
    return this.heatmapEnabled; 
  }

  get getCurrentEvolutionShowing() {
    return this.currentEvolutionShowing; 
  }

  get getTimeEvolutionTook() {
    return this.driver.getEvolutionDuration; 
  }

  get getAlivePercentageShowing() {
    return this.alivePercentageShowing;
  }

  get getAliveCountShowing() {
    return this.aliveCountShowing; 
  }

  get getAlgorithmDurationShowing() {
    return this.algorithmDurationShowing
  }

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
  private heatmapEnabled: boolean;  
  private isShowing: boolean;
  private settingsPanelStateAction?: StateAction<boolean>;
  private legendStateAction?: StateAction<Set<LegendItem>>
}

export default GameOfLifeSettings; 