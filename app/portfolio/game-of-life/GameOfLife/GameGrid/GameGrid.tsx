"use client"
import styles from './GameGrid.module.css';
import { getCells, mapCells, getNewGrid } from '../util/gameOfLife';
import { useEffect, useRef, useState } from 'react';
import GameCell from '../GameCell/GameCell';
import { CellStateOptions } from '../GameCell/GameCell';
import { deflateRawSync } from 'zlib';
import { animationDebounce } from '@/app/util/debounce';
/**
 * The functional component for the GameGrid
*/

const GameGrid: React.FC = () => {
  let timer: any; 
  const [cells, setCells] = useState<number[][]>(getCells())
  const [isPlaying, setIsPlaying] = useState<boolean>(false);


  const pauseEvolution = () => {
    if(isPlaying) {
      clearInterval(timer);
      setIsPlaying(false);
    }
  }

  const startEvolution = () => {
   if(!isPlaying) setIsPlaying(true);
   timer = !timer && setInterval(() => {
    const newCells = getNewGrid(cells);
    animationDebounce(setCells(newCells));
   }, 50)
  }

  useEffect(() => {
    if(isPlaying) {
      startEvolution();
    }

    return () => clearInterval(timer);
  }, [cells, isPlaying])


  return (
    <div>

    <div className={styles["game-grid"]}>
      <div className={styles["game-grid__inner"]}>
        {mapCells(cells)}
      </div>
    </div>
      <div style={{marginTop: "0px"}}>
        <button onClick={startEvolution}>play</button>
        <button onClick={pauseEvolution}>Pause</button>
      </div>
    </div>
  )
}

export default GameGrid;