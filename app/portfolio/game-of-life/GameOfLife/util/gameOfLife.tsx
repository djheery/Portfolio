"use-client"
import GameCell from "../GameCell/GameCell";
import { CellStateOptions } from "../GameCell/GameCell";

// TODO Add comments
// TODO Refactor to a class 
// TODO Try Hashlife Algorithm for optimization 
// TODO Try Refactoring to a canvas
// TODO Add Warp Zone Feature

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * This param represents...
*/

const movementCoordinates = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1], 
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
]
/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * This param represents...
*/

export const getCells = () => {
  const arr: number[][] = []; 
  const rows = 30; 
  const cols = 40; 
  for(let i = 0; i < rows; i++) {
    arr.push([]);
    for(let j = 0; j < cols; j++) {
      arr[i][j] = Math.random() > 0.5 ? 1 : 0;
    }
  }

  return arr
}

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * This param represents...
*/

export const mapCells = (cells: number[][]): JSX.Element[][] => {
  return cells.map((r, idx1) => {
    const cellArr = r.map((c, idx2) => {
      if(c === 1) {
        return (
          <GameCell cellState={CellStateOptions.ALIVE} key={`${idx1}-${idx2}`}/>
        )
      } else {
        return (
          <GameCell cellState={CellStateOptions.DEAD} key={`${idx1}-${idx2}`} />
        )
      }
    });

    return cellArr
  })
}

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * This param represents...
*/

const checkCellAliveStatus = (
    cells: number[][], 
    visitedMap: any, 
    currentCoordinates: number[]
  ):number => {
  let cc = currentCoordinates; 
  let neighbours = 0; 

  for(let i = 0; i < movementCoordinates.length; i++) {
    const [r, c] = [
      cc[0] + movementCoordinates[i][0], 
      cc[1] + movementCoordinates[i][1]
    ];

    if(visitedMap[`${r}-${c}`]) {
      neighbours += visitedMap[`${r}-${c}`] ? 1 : 0;
      continue; 
    }
    
    const isOutOfBounds = r < 0 
                       || c < 0
                       || r > cells.length - 1
                       || c > cells.length - 1

    if(isOutOfBounds) continue;

    const cellCheckedIsAlive = cells[r][c] === 1;
    neighbours += cellCheckedIsAlive ? 1 : 0; 
    visitedMap[`${r}-${c}`] = cellCheckedIsAlive;
  }

  let isAlive = 0;

  if(cells[cc[0]][cc[1]] === 0) {
    isAlive = neighbours === 3 ? 1 : 0;
  } else {
    isAlive = neighbours === 3 || neighbours === 2 ? 1 : 0;
  } 

  return isAlive;
}

/**
 * Describe your method...
 *
 * @param paramName This param represents...
 * This param represents...
*/

export const getNewGrid = (cells: number[][]): number[][] => {
  const visitedMap: any = {}; 
  const cellClone:number[][] = JSON.parse(JSON.stringify(cells));

  for(let r = 0; r < cells.length; r++) {
    for(let c = 0; c < cells[r].length; c++) {
      let isAlive = cells[r][c] === 1;
      visitedMap[`${r}-${c}`] = isAlive;
      cellClone[r][c] = checkCellAliveStatus(cells, visitedMap, [r, c]);
    }
  }

  console.log("finished")
  
  return cellClone;
}