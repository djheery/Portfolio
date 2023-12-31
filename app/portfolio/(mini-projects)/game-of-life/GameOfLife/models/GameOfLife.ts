"use client"

import { animationDebounce } from "@/app/util/debounce";
import { GameCell } from "./GameCell";

/**
 * A class for holding the general state of the 
 * GameOfLife component/page. 
 *
 * @param movementCoordiates A Matrix used to aid the boundary Cell 
 * Checks on an evolution
 * @param gridColumns The amount of Columns in the grid 
 * @param gridRows The amount of Rows in the grid 
 * @param currentEvolution The current evolution number 
 * @param warpZoneEnabled A boolean flag that indicates if the grid wraps
 * @param gridState A matrix representing the grid containing Cells
 * @param isInitialLoad A boolean flag that idicates 
 * if the program is in the initial load state 
 * @param populationDensity A floating point number between 1 & 0 
 * that definies the population density of the grid 
*/

class GameOfLife {

  /**
   * The default constructor for the Game of Life Class
  */
 
  constructor() {
    this.gridColumns = 60; 
    this.gridRows = 60; 
    this.currentEvolution = 0; 
    this.warpZoneEnabled = true; 
    this.gridState = []; 
    this.populationDensity = .45;
    this.isInitialLoad = true;
    this.currentAliveCount = 0; 
    this.algorithmDuration = 0; 
    this.newGrid(); 
  }

  /**
   * Generate a new Grid. 
   * Used on initial load and when randomise is selected. 
  */

  private newGrid() {
    for(let r = 0; r < this.gridRows; r++) {
      if(this.isInitialLoad) this.gridState.push([]);
      for(let c = 0; c < this.gridColumns; c++) {
        const isAlive = Math.random() < this.populationDensity;
        if(this.isInitialLoad) {
          this.gridState[r][c] = new GameCell(r, c, isAlive);
        } else { 
          this.gridState[r][c].setAlive(isAlive);
        }

        if(isAlive) this.currentAliveCount++;
      }
    }

    this.isInitialLoad = false; 
  }

  public setPopulationDensity(newDensity: number) {
    this.populationDensity = newDensity;
  }

  /**
   * Checks if the the boundary to check is out of bounds. 
   *
   * @param boundary A number array representing the 
   * [row, column] coordinates of the boundary to check. 
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
   * Calculates the boundaries to check and 
   *
   * @param boundary 
   * @param currentCoords
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

    if(this.warpZoneEnabled && isOutOfBounds) {
      if(newBoundary[0] < 0) newBoundary[0] = this.gridRows - 1; 
      if(newBoundary[0] > this.gridRows - 1) newBoundary[0] = 0; 
      if(newBoundary[1] < 0) newBoundary[1] = this.gridColumns - 1; 
      if(newBoundary[1] > this.gridColumns - 1) newBoundary[1] = 0;

      isOutOfBounds = false;
    } 

    return [newBoundary, isOutOfBounds]; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  private checkCellStatus(
      currentCoords: number[]
    ): void {
    let cc = currentCoords; 
    let targetCell: GameCell = this.gridState[cc[0]][cc[1]];
    let neighbours = 0; 
    let boundaries = GameOfLife.BOUNDARY_COORDINATES;

    for(let i = 0; i < boundaries.length; i++) {
      const [[r, c], isOutOfBounds] = this.boundaryCalculation(boundaries[i], cc);      
      if(isOutOfBounds) continue; 

      const checkVisited = this.visitedNodes!.get(`${r}-${c}`);

      if(checkVisited !== undefined) {
        neighbours += checkVisited ? 1 : 0; 
        continue; 
      }

      const boundaryCellIsAlive = this.gridState[r][c].getIsAlive;
      neighbours += boundaryCellIsAlive ? 1 : 0; 
      this.visitedNodes!.set(`${r}-${c}`, boundaryCellIsAlive);
    }

    if(!targetCell.getIsAlive) {
      neighbours === 3 ? animationDebounce(targetCell.toggleIsAlive()) : null; 
    } else {
      neighbours > 3 || neighbours < 2  ? animationDebounce(targetCell.toggleIsAlive()) : null;
    }

    if(targetCell.getIsAlive) this.currentAliveCount++;
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  get getAlivePercentage() {
    return Math.round((this.currentAliveCount / (this.gridRows * this.gridColumns)) * 100); 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  get getCurrentAliveCount() {
    return this.currentAliveCount; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  get getNewGrid(): GameCell[][] {
    this.currentEvolution = 0; 
    this.currentAliveCount = 0; 
    this.newGrid(); 
    return this.gridState; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  get warpzoneEnabled(): boolean {
    return this.warpZoneEnabled;
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  get getGrid(): GameCell[][] {
    return this.gridState; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  get getCurrentEvolution(): number {
    return this.currentEvolution; 
  }


  get getWarpZoneEnabled() {
    return this.warpzoneEnabled; 
  }

   /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

    public setWarpZoneEnabled(isEnabled: boolean) {
      this.warpZoneEnabled = isEnabled; 
    }
  
    get getPopulationDensity() {
      return this.populationDensity; 
    }


  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * This param represents...
  */

  public tick(): void {
    this.visitedNodes = new Map<string, boolean>();
    this.currentAliveCount = 0; 
    const algoStart = Date.now();

    for(let r = 0; r < this.gridRows; r++) {
      for(let c = 0; c < this.gridColumns; c++) {
        let isAlive = this.gridState[r][c].getIsAlive;
        this.visitedNodes.set(`${r}-${c}`, isAlive);
        this.checkCellStatus([r, c]);
      }
    }

    this.algorithmDuration = Date.now() - algoStart;
    this.currentEvolution++; 
  }

  /**
   * Describe your method...
   *
   * @param paramName This param represents...
   * @returns This method returns...
  */

  get getAlgorithmDuration() {
    return this.algorithmDuration; 
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
  private currentAliveCount: number; 
  private algorithmDuration: number; 
  private visitedNodes?: Map<string, boolean>
}

export default GameOfLife;