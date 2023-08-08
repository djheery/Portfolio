"use client"

import { useEffect, useState } from 'react';
import GameOfLifeDriver from '../../models/GameOfLifeDriver';
import GameOfLifeSettings, { LegendItem } from '../../models/GameOfLifeSettings';
import SettingsPanel from '../SettingsPanel/SettingsPanel';
import styles from './GameLegend.module.css';
import GameLegendItem from './GameLegendItem/GameLegendItem';

/**
 * An interface that details...
 *
 * @param interfaceParam This param represents...
*/

export interface LegendProps {
  settings: GameOfLifeSettings,
}

/**
 * The functional component for the GameLegend
 *
 * @param myParam your params here
*/

const GameLegend: React.FC<{eventHandlers: LegendProps}> = ({eventHandlers}) => {
  const [items, setItems] = useState<Set<LegendItem>>(eventHandlers.settings.getLegend);
  
  useEffect(() => { 
    eventHandlers.settings.registerLegendPanelStateAction(setItems);
  }, [])

  const itemArray = Array.from(items);
  return (
    <>
      { itemArray.length >= 1 &&
            <div className={styles["game-legend"]}>
            <ul className={styles["game-legend__list"]}>
              {itemArray.map((item, idx) => {
                return (
                  <li key={idx}>
                    <GameLegendItem itemSettings={item} />
                  </li>
                )
              })}
            </ul>
          </div>
      }
    </>
  )
}

export default GameLegend;