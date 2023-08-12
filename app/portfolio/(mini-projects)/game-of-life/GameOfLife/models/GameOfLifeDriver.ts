import { StateAction } from "@/app/models/global-types";
import { Dispatch, SetStateAction } from "react";
import GameOfLife from "./GameOfLife";

class GameOfLifeDriver {
  constructor() {
    this.game = new GameOfLife();
    this.isPlaying = false; 
    this.evolutionDuration = 40; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public getGameGrid() {
    return this.game.getGrid;
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public startEvolution() {
    if(this.isPlaying) return;
    if(!this.isPlaying) this.isPlaying = true; 
    this.timer = !this.timer && setInterval(() => {
      this.game.tick();
      if(this.evolutionCounterMethod)
        this.evolutionCounterMethod!(this.game.getCurrentEvolution);
      if(this.alivePercentageMethod !== undefined)
        this.alivePercentageMethod(this.game.getAlivePercentage); 
      if(this.aliveCountMethod !== undefined)
        this.aliveCountMethod(this.game.getCurrentAliveCount);
      if(this.algorithmPerformanceMethod !== undefined)
        this.algorithmPerformanceMethod(this.game.getAlgorithmDuration)
    }, this.evolutionDuration);
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public pauseEvolution() {
    if(this.isPlaying) {
      clearInterval(this.timer);
      this.timer = null;
      this.isPlaying = false; 
    }
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public randomiseBoard() {
    if(this.isPlaying) this.pauseEvolution();
    
    this.game.getNewGrid;
    
    if(this.evolutionCounterMethod)
      this.evolutionCounterMethod!(this.game.getCurrentEvolution);
    if(this.alivePercentageMethod !== undefined)
      this.alivePercentageMethod(this.game.getAlivePercentage); 
    if(this.aliveCountMethod !== undefined)
      this.aliveCountMethod(this.game.getCurrentAliveCount);
    if(this.algorithmPerformanceMethod !== undefined)
      this.algorithmPerformanceMethod(this.game.getAlgorithmDuration)
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public stepThroughEvolution() {
    if(this.isPlaying) this.pauseEvolution(); 
    this.game.tick();  
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public registerEvolutionCounter(setStateMethod: Dispatch<SetStateAction<number>>) {
    this.evolutionCounterMethod = setStateMethod;
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public destroyEvolutionCounter() {
    this.evolutionCounterMethod = undefined; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public registerAlivePercentageMethod(setStateMethod: StateAction<number>) {
    this.alivePercentageMethod = setStateMethod; 
  } 

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public destroyAlivePercentageMethod() {
    this.alivePercentageMethod = undefined; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public registerAliveCountMethod(setStateMethod: StateAction<number>) {
    this.aliveCountMethod = setStateMethod;
  } 

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public destroyAliveCountMethod() {
    this.aliveCountMethod = undefined; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public registerAlgorithmPerformanceMethod(setStateMethod: StateAction<number>) {
    this.algorithmPerformanceMethod = setStateMethod; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public destroyAlgorithmPerformanceMethod() {
    this.algorithmPerformanceMethod = undefined; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  public setEvolutionDuration(evolutionDuration: number) { 
    this.evolutionDuration = evolutionDuration;
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  get getGame() {
    return this.game; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  get getEvolutionDuration() { 
    return this.evolutionDuration;
  }

  private game: GameOfLife;
  private isPlaying: boolean; 
  private timer?: any; 
  private evolutionDuration: number;
  private evolutionCounterMethod?: Dispatch<SetStateAction<number>>
  private alivePercentageMethod?: StateAction<number>;
  private aliveCountMethod?: StateAction<number>;
  private algorithmPerformanceMethod?: StateAction<number>
}

export default GameOfLifeDriver; 