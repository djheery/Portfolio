"use-client"
import GameCellUI from "../GameCell/GameCell";
import { GameCell } from "./GameCell";

class GameOfLifeUtil {
  public static mapCells(cells: GameCell[][]): JSX.Element[][] {
    return cells.map((r, idx1) => {
      const cellArr = r.map((c, idx2) => {
        return <GameCellUI cell={c} key={`${idx1}-${idx2}`}/>
      });
      
      return cellArr
    })
  }
}

export default GameOfLifeUtil;

