"use client"
import styles from './GameGrid.module.css';
import { getCells, mapCells, getNewGrid } from '../util/gameOfLife';
import { useCallback, useEffect, useState } from 'react';
import { animationDebounce } from '@/app/util/debounce';
import ActionPanel, { PanelOperations, ActionNames } from '../ActionPanel/ActionPanel';
/**
 * The functional component for the GameGrid
*/

const GameGrid: React.FC = () => {
  let timer: any; 
  const [cells, setCells] = useState<number[][]>(getCells())
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const pauseEvolution = useCallback(() => {
    if(isPlaying) {
      clearInterval(timer);
      setIsPlaying(false);
    }
  }, [isPlaying])

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
   }, 30)
  }

  const randomise = useCallback(() => {
    if(isPlaying) pauseEvolution(); 
    const newCells = getCells(); 
    setCells(() => newCells);
  }, [isPlaying])

  useEffect(() => {
    if(isPlaying) {
      startEvolution();
    }

    return () => clearInterval(timer);
  }, [cells, isPlaying]);


  const panelOperations: PanelOperations = {
    [ActionNames.START]: startEvolution, 
    [ActionNames.PAUSE]: pauseEvolution, 
    [ActionNames.STEP]: stepThroughEvolution, 
    [ActionNames.RANDOM]: randomise,
    [ActionNames.RANGE]: () => {} 
  }


  return (
    <div className={styles["mac-container"]}>
      <img src="/images/old-mac-computer.png" alt="" className={styles["old-mac-img"]}/>
      <div className={styles["game-grid"]}>
        <div className={styles["game-grid__inner"]}>
          {mapCells(cells)}
        </div>
      </div>
      <ActionPanel operations={panelOperations} />
    </div>
  )
}

export default GameGrid;