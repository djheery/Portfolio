import { animationDebounce } from "@/app/util/debounce";
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
      animationDebounce(this.game.tick());
      this.evolutionCounterMethod!(this.game.getCurrentEvolution);
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
    this.evolutionCounterMethod!(this.game.getCurrentEvolution);
  }

  public stepThroughEvolution() {
    if(this.isPlaying) this.pauseEvolution(); 
    this.game.tick();  
  }

  public registerEvolutionCounter(setStateMethod: Dispatch<SetStateAction<number>>) {
    this.evolutionCounterMethod = setStateMethod;
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
}

export default GameOfLifeDriver; 