"use client"
import styles from './GameGrid.module.css';
import GameOfLifeUtil from '../util/GameOfLifeUtil';
import ActionPanel, { PanelOperations, ActionNames } from '../ActionPanel/ActionPanel';
import GameOfLifeDriver from '../util/GameOfLifeDriver';
import EvolutionCounter from '../EvolutionCounter/EvolutionCounter';
import SettingsPanel from '../SettingsPanel/SettingsPanel';
import GameOfLifeSettings from '../util/SettingsPanel';


/**
 * The functional component for the GameGrid
*/

const GameGrid: React.FC = () => {

  const GameDriver = new GameOfLifeDriver();
  const SettingsUtil = new GameOfLifeSettings(GameDriver); 
  const grid = GameDriver.getGameGrid();

  const panelOperations: PanelOperations = {
    [ActionNames.START]: GameDriver.startEvolution.bind(GameDriver), 
    [ActionNames.PAUSE]: GameDriver.pauseEvolution.bind(GameDriver), 
    [ActionNames.STEP]: GameDriver.stepThroughEvolution.bind(GameDriver), 
    [ActionNames.RANDOM]: GameDriver.randomiseBoard.bind(GameDriver),
    [ActionNames.RANGE]: () => {} 
  }


  return (
    <div className={styles["mac-container"]}>
      <img src="/images/old-mac-computer.png" alt="" className={styles["old-mac-img"]}/>
      <div className={styles["game-grid"]}>
        <EvolutionCounter driver={GameDriver} />
        <div className={styles["game-grid__inner"]}>
          {GameOfLifeUtil.mapCells(grid)}
        </div>
        <SettingsPanel settings={SettingsUtil} />
      </div>
      <ActionPanel operations={panelOperations} />
    </div>
  )
}

export default GameGrid;