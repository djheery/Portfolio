import styles from './EvolutionCounter.module.css';
import GameOfLifeDriver from '../util/GameOfLifeDriver'
import { useEffect, useState } from 'react';
import GOLUtil from '../util/GameOfLifeUtil';

/**
 * The functional component for the EvolutionCounter
 *
 * @param driver The driver class for the Game of Life
*/

const EvolutionCounter: React.FC<{driver: GameOfLifeDriver}> = ({driver}) => {
  const [currentEvolution, setCurrentEvolution] = useState<number>(0); 

  const formatedEvolutionNumber = GOLUtil.formatEvolutionNumber(currentEvolution);
  
  useEffect(() => {
    driver.registerEvolutionCounter(setCurrentEvolution);
  }, []);

  return (
    <div className={styles["evolution-counter"]}>
      <div className={styles["evolution-counter__inner"]}>
        <span className={styles["evolution-header"]}>
          Current Evolution: 
          <span className={styles["evolution-number"]}>
            {formatedEvolutionNumber}
          </span>
        </span>
      </div>
    </div>
  )
}

export default EvolutionCounter;