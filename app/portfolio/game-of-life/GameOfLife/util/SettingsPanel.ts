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
  }

  public setWarpZoneEnabled(isEnabled: boolean) {

  }

  public setPopulationDensity(populationDensity: number) {

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
      callback: this.setPopulationDensity
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
      callback: this.setEvolutionDuration
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
}

export default GameOfLifeSettings; 