import { animationDebounce } from "@/app/util/debounce";
import { Dispatch, SetStateAction } from "react";
import GameOfLife from "./GameOfLife";

class GameOfLifeDriver {
  constructor() {
    this.game = new GameOfLife();
    this.isPlaying = false; 
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
    }, 40);
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

  private game: GameOfLife;
  private isPlaying: boolean; 
  private timer?: any; 
  private evolutionCounterMethod?: Dispatch<SetStateAction<number>>
}

export default GameOfLifeDriver; 