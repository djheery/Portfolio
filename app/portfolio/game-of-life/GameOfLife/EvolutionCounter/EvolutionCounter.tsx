import styles from './EvolutionCounter.module.css';
import GameOfLifeDriver from '../util/GameOfLifeDriver'
import { useEffect, useState } from 'react';

const formatNumber = (currentEvolution: number) => {
  const baseZeros = 4;
  const num = `${currentEvolution}`;
  if(num.length >= baseZeros) return num 

  
  return `${"0".repeat(baseZeros - num.length)}${num}`; 
}
/**
 * The functional component for the EvolutionCounter
 *
 * @param myParam your params here
*/

const EvolutionCounter: React.FC<{driver: GameOfLifeDriver}> = ({driver}) => {
  const [currentEvolution, setCurrentEvolution] = useState<number>(0); 

  useEffect(() => {
    driver.registerEvolutionCounter(setCurrentEvolution);
  }, [])

  return (
    <div className={styles["evolution-counter"]}>
      <div className={styles["evolution-counter__inner"]}>
        <span className={styles["evolution-header"]}>
          Current Evolution: 
          <span className={styles["evolution-number"]}>{formatNumber(currentEvolution)}</span>
        </span>
      </div>
    </div>
  )
}

export default EvolutionCounter;