import { GameCell } from "./GameCell";

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * This param represents...
*/

class GameOfLife {

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */
 
  constructor() {
    this.gridColumns = 60; 
    this.gridRows = 60; 
    this.currentEvolution = 0; 
    this.warpZoneEnabled = true; 
    this.gridState = []; 
    this.populationDensity = .6;
    this.isInitialLoad = true; 
    this.newGrid(); 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  private newGrid() {
    for(let r = 0; r < this.gridRows; r++) {
      if(this.isInitialLoad) this.gridState.push([]);
      for(let c = 0; c < this.gridColumns; c++) {
        const isAlive = Math.random() > this.populationDensity;
        if(this.isInitialLoad) {
          this.gridState[r][c] = new GameCell(r, c, isAlive);
        } else { 
          this.gridState[r][c].setAlive(isAlive);
        }
      }
    }

    this.isInitialLoad = false; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  private isOutOfBounds(boundary: number[]) {
    const [r, c] = boundary;
    let outOfBounds =  r < 0
                    || c < 0
                    || r > this.gridState.length - 1
                    || c > this.gridState.length - 1;



    return outOfBounds;
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  private boundaryCalculation(
    boundary: number[], 
    currentCoords: number[]
  ): [number[], boolean] {
    
    let newBoundary = [
      boundary[0] + currentCoords[0], 
      boundary[1] + currentCoords[1]
    ];
    
    let isOutOfBounds = this.isOutOfBounds(newBoundary); 

    return [newBoundary, isOutOfBounds]; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  private checkCellStatus(visitedNodes: Map<string, boolean>, currentCoords: number[]) {
    let cc = currentCoords; 
    let targetCell: GameCell = this.gridState[cc[0]][cc[1]];
    let neighbours = 0; 
    let boundaries = GameOfLife.BOUNDARY_COORDINATES;

    for(let i = 0; i < boundaries.length; i++) {
      const [[r, c], isOutOfBounds] = this.boundaryCalculation(boundaries[i], cc);      
      if(isOutOfBounds) continue; 

      const checkVisited = visitedNodes.get(`${r}-${c}`);

      if(checkVisited !== undefined) {
        neighbours += checkVisited ? 1 : 0; 
        continue; 
      }

      const boundaryCellIsAlive = this.gridState[r][c].getIsAlive;
      neighbours += boundaryCellIsAlive ? 1 : 0; 
      visitedNodes.set(`${r}-${c}`, boundaryCellIsAlive);
    }

    if(!targetCell.getIsAlive) {
      neighbours === 3 ? targetCell.toggleIsAlive() : null; 
    } else {
      neighbours > 3 || neighbours < 2  ? targetCell.toggleIsAlive() : null;
    }
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  get getNewGrid() {
    this.newGrid(); 
    return this.gridState; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  get getGrid() {
    return this.gridState; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  get getCurrentEvolution() {
    return this.currentEvolution; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  set setColumns(numCols: number) {
    this.gridColumns = numCols; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  set setRows(numRows: number) {
    this.gridRows = numRows; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  public tick() {
    const visitedNodes = new Map<string, boolean>();
    const cellClone = JSON.parse(JSON.stringify(this.gridState)); 

    for(let r = 0; r < this.gridRows; r++) {
      for(let c = 0; c < this.gridColumns; c++) {
        let isAlive = this.gridState[r][c].getIsAlive;
        visitedNodes.set(`${r}-${c}`, isAlive);
        this.checkCellStatus(visitedNodes, [r, c]);
      }
    }

    this.currentEvolution++; 
  }

  private static BOUNDARY_COORDINATES = [
                                 [0, 1],[0, -1],[1, -1],[-1, 1], 
                                 [1, 1],[-1, -1],[1, 0],[-1, 0]
                               ]; 

  private warpZoneEnabled: boolean; 
  private gridState: GameCell[][];
  private currentEvolution: number;
  private populationDensity: number; 
  private gridRows: number; 
  private gridColumns: number; 
  private isInitialLoad: boolean; 
}

export default GameOfLife;