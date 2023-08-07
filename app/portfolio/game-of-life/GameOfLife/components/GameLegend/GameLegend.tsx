import GameOfLifeDriver from '../../models/GameOfLifeDriver';
import GameOfLifeSettings from '../../models/GameOfLifeSettings';
import styles from './GameLegend.module.css';

/**
 * An interface that details...
 *
 * @param interfaceParam This param represents...
*/

export interface LegendProps {
  driver: GameOfLifeDriver,
  settings: GameOfLifeSettings,
}

/**
 * The functional component for the GameLegend
 *
 * @param myParam your params here
*/

const GameLegend: React.FC<{eventHandlers: LegendProps}> = ({eventHandlers}) => {
  return (
    <div>
      GameLegend Component
    </div>
  )
}

export default GameLegend;