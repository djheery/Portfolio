import { StateAction } from "@/app/models/global-types";
import { Dispatch, SetStateAction } from "react";
import GameOfLife from "./GameOfLife";

class GameOfLifeDriver {
  constructor() {
    this.game = new GameOfLife();
    this.isPlaying = false; 
    this.evolutionDuration = 40; 
  }

  public getGameGrid() {
    return this.game.getGrid;
  }

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

  public pauseEvolution() {
    if(this.isPlaying) {
      clearInterval(this.timer);
      this.timer = null;
      this.isPlaying = false; 
    }
  }

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

  public stepThroughEvolution() {
    if(this.isPlaying) this.pauseEvolution(); 
    this.game.tick();  
  }

  public registerEvolutionCounter(setStateMethod: Dispatch<SetStateAction<number>>) {
    this.evolutionCounterMethod = setStateMethod;
  }

  public destroyEvolutionCounter() {
    this.evolutionCounterMethod = undefined; 
  }

  public registerAlivePercentageMethod(setStateMethod: StateAction<number>) {
    this.alivePercentageMethod = setStateMethod; 
  } 

  public destroyAlivePercentageMethod() {
    this.alivePercentageMethod = undefined; 
  }

  public registerAliveCountMethod(setStateMethod: StateAction<number>) {
    this.aliveCountMethod = setStateMethod;
  } 

  public destroyAliveCountMethod() {
    this.aliveCountMethod = undefined; 
  }

  public registerAlgorithmPerformanceMethod(setStateMethod: StateAction<number>) {
    this.algorithmPerformanceMethod = setStateMethod; 
  }

  public destroyAlgorithmPerformanceMethod() {
    this.algorithmPerformanceMethod = undefined; 
  }

  public setEvolutionDuration(evolutionDuration: number) { 
    this.evolutionDuration = evolutionDuration;
  }

  get getGame() {
    return this.game; 
  }

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