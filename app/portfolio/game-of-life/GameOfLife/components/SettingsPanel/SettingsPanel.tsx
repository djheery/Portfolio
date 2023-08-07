"use client"

import { useState, useEffect } from 'react';
import GameOfLifeSettings from '../../models/GameOfLifeSettings';
import EnableSettingButton from './EnableSettingButton/EnableSettingButton';
import NumberInput from './NumberInput/NumberInput';
import styles from './SettingsPanel.module.css';

/**
 * The functional component for the SettingsPanel
*/



const SettingsPanel: React.FC<{settings: GameOfLifeSettings}> = ({settings}) => {
  const [isShowing, setIsShowing] = useState<boolean>(false); 
  const panelClasses = `
    ${styles["settings-panel"]}
    ${isShowing ? `${styles["settings-panel--active"]}` : ""}
  `

  const populationDensitySettings = settings.getPopulationDensityInputSettings
  const evolutionDurationSettings = settings.getEvolutionDurationInputSettings;
  const warpZoneButtonProps = {
    settingIsOn: settings.getWarpZoneEnabled, 
    callback: settings.setWarpZoneEnabled.bind(settings),
  };

  const heatmapButtonProps = {
    settingIsOn: settings.getHeatMapEnabled, 
    callback: settings.setHeatMapShowing.bind(settings)
  };

  const currentEvolutionShowingButtonProps = {
    settingIsOn: settings.getCurrentEvolutionShowing, 
    callback: settings.setCurrentEvolutionShowing.bind(settings)
  }
 
  const alivePercentageShowingButtonProps = {
    settingIsOn: settings.getAlivePercentageShowing, 
    callback: settings.setAlivePercentageShowing.bind(settings),
  }

  const aliveCountShowingButtonProps = {
    settingIsOn: settings.getAliveCountShowing, 
    callback: settings.setAliveCountShowing.bind(settings), 
  };  

  const algorithmDurationButtonProps = {
    settingIsOn: settings.getAlgorithmDurationShowing, 
    callback: settings.setActualDurationShowing.bind(settings),
  }

  useEffect(() => {
    settings.registerSettingsPanelStateAction(setIsShowing)
  }, [])


  return (
    <div className={panelClasses}>
      <div className={styles["settings-panel__inner"]}>
        <h3 className={styles["settings-panel__heading"]}>
          General Settings <span className={styles["heading-decoration"]}></span>
        </h3>
        <div className={styles["settings-list__container"]}>
          <ul className={styles["settings-list"]}>
            <li className={styles["settings-list__item"]}>
              Warpzone Enabled: <EnableSettingButton buttonSettings={warpZoneButtonProps}/>
            </li>
            <li className={styles["settings-list__item"]}>
              Alive Duration Heatmap: <EnableSettingButton buttonSettings={heatmapButtonProps}/>
            </li>
            <li className={styles["settings-list__item"]}>
              Population Density: <NumberInput inputSettings={populationDensitySettings}/>
            </li>
            <li className={styles["settings-list__item"]}>
              Evolution Duration (Ms): <NumberInput inputSettings={evolutionDurationSettings}/>
            </li>
          </ul>
        </div>
        <h4 className={styles["settings-panel__sub-heading"]}>
          Legend Settings
          <span className={styles["heading-decoration"]}></span>
        </h4>
        <div className={styles["settings-list__container"]}>
          <ul className={styles["settings-list"]}>
            <li className={styles["settings-list__item"]}>
              Show Current Evolution: <EnableSettingButton buttonSettings={currentEvolutionShowingButtonProps}/>
            </li>
            <li className={styles["settings-list__item"]}>
              Show Alive Percentage: <EnableSettingButton buttonSettings={alivePercentageShowingButtonProps}/>
            </li>
            <li className={styles["settings-list__item"]}>
              Show Alive Count: <EnableSettingButton buttonSettings={aliveCountShowingButtonProps}/>
            </li>
            <li className={styles["settings-list__item"]}>
              Show Time Per Evolution Ms: <EnableSettingButton buttonSettings={algorithmDurationButtonProps}/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SettingsPanel;