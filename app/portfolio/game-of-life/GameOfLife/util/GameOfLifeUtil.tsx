"use-client"
import GameCellUI from "../components/GameCell/GameCell";
import { GameCell } from "../models/GameCell";

class GameOfLifeUtil {

  /**
   * A method to map cells to their JSX componennts
   *
   * @param cells A matrix of GameCells to be mapped to their UI counterpart 
   * @returns A JSX.Element matrix consisting of the UI version of the Game Cells
  */
  public static mapCells(cells: GameCell[][]): JSX.Element[][] {
    return cells.map((r, idx1) => {
      const cellArr = r.map((c, idx2) => {
        return <GameCellUI cell={c} key={`${idx1}-${idx2}`}/>
      });
      
      return cellArr
    })
  }

  /**
   * A method to format a number such that zeros are appended to the number
   *
   * @param currentEvolution The number related to the current evolution
   * @returns A string representation of the number padded with 0's 
  */

  public static formatEvolutionNumber(currentEvolution: number): string {
    const baseZeros = 4;
    const num = `${currentEvolution}`;
    if(num.length >= baseZeros) return num 
    
    return `${"0".repeat(baseZeros - num.length)}${num}`; 
  }

  public static numberIsValid(min: number, max: number, currentValue: number) {
    return currentValue < min || currentValue > max;
  }
}

export default GameOfLifeUtil;

