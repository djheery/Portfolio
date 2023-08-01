"use client"
import styles from './GameGrid.module.css';
import { getCells, mapCells, getNewGrid } from '../util/gameOfLife';
import { useEffect, useRef, useState } from 'react';
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

  const stepThroughEvolution = () => {
    if(isPlaying) pauseEvolution();
    const newCells = getNewGrid(cells);
    setCells(() => newCells)
  };

  const startEvolution = () => {
   if(!isPlaying) setIsPlaying(true);
   timer = !timer && setInterval(() => {
    const newCells = getNewGrid(cells);
    animationDebounce(setCells(newCells));
   }, 40)
  }

  const randomise = () => {
    if(isPlaying) pauseEvolution(); 
    const newCells = getCells(); 
    setCells(() => newCells);
  }

  useEffect(() => {
    if(isPlaying) {
      startEvolution();
    }

    return () => clearInterval(timer);
  }, [cells, isPlaying])


  return (
    <div className={styles["mac-container"]}>
      <img src="/images/old-mac-computer.png" alt="" className={styles["old-mac-img"]}/>
      <div style={{marginTop: "0px"}}>
          <button className={styles["game-button"]} onClick={startEvolution} disabled={isPlaying}>Play</button>
          <button className={styles["game-button"]}onClick={pauseEvolution}>Pause</button>
          <button className={styles["game-button"]} onClick={randomise}>Randomise</button>
          <button className={styles["game-button"]} onClick={stepThroughEvolution}>Step through Evolution</button>
        </div>
      <div className={styles["game-grid"]}>
        <div className={styles["game-grid__inner"]}>
          {mapCells(cells)}
        </div>
      </div>
    </div>
  )
}

export default GameGrid;