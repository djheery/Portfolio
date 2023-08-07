import { StateAction } from "@/app/models/global-types";
import { NumberInputSettings } from "../SettingsPanel/NumberInput/NumberInput";
import GameOfLife from "./GameOfLife";
import GameOfLifeDriver from "./GameOfLifeDriver";

class GameOfLifeSettings {
  constructor(driver: GameOfLifeDriver) {
    this.driver = driver; 
    this.game = driver.getGame
    this.alivePercentageShowing = false; 
    this.currentEvolutionShowing = true; 
    this.aliveCountShowing = false; 
    this.heatmapEnabled = false; 
    this.isShowing = false; 
  }

  public setWarpZoneEnabled(isEnabled: boolean) {
    this.game.setWarpZoneEnabled(isEnabled);
  }

  public setPopulationDensity(populationDensity: number) {
    this.game.setPopulationDensity(populationDensity / 100);
    this.game.getNewGrid;
  }

  public setEvolutionDuration(evolutionDuration: number) {
    this.driver.setEvolutionDuration(evolutionDuration); 
  }

  public setHeatMapShowing() {
    this.heatmapEnabled = !this.heatmapEnabled; 
  }

  public setAlivePercentageShowing() {
    this.alivePercentageShowing = !this.alivePercentageShowing; 
  }

  public setAliveCountShowing() {
    this.aliveCountShowing = !this.aliveCountShowing;
  }

  public setCurrentEvolutionShowing() {

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

  get getPopulationDensityInputSettings(): NumberInputSettings {
    return {
      name: "population-density", 
      min: 0, 
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


  private evolutionDurationFlag = "Ms" as const;
  private populationDensityFlag = "%" as const; 
  private driver: GameOfLifeDriver; 
  private game: GameOfLife;
  private alivePercentageShowing: boolean; 
  private currentEvolutionShowing: boolean; 
  private aliveCountShowing: boolean; 
  private heatmapEnabled: boolean;  
  private isShowing: boolean;
  private settingsPanelStateAction?: StateAction<boolean>
}

export default GameOfLifeSettings; 