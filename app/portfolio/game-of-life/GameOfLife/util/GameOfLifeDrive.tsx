import { animationDebounce } from "@/app/util/debounce";
import GameOfLife from "./GameOfLifeClass";

class GameOfLifeDriver {
  constructor() {
    this.game = new GameOfLife();
    this.isPlaying = false; 
  }

  public startEvolution() {
    if(!this.isPlaying) this.isPlaying = true; 
    this.timer = !this.timer && animationDebounce(setInterval(() => {
      this.game.tick()
    }, 50))
  }

  public pauseEvolution() {
    if(this.isPlaying) {
      clearInterval(this.timer!);
      this.isPlaying = false; 
    }
  }

  public randomiseBoard() {
    if(this.isPlaying) this.pauseEvolution();
    this.game.getNewGrid;
  }

  public stepThroughEvolution() {
    if(this.isPlaying) this.pauseEvolution(); 
    this.game.tick();  
  }

  private game: GameOfLife;
  private isPlaying: boolean; 
  private timer?: any; 
  private gridStateMethod: 
}

export default GameOfLifeDriver; 