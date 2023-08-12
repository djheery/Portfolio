import React from 'react';
import SortSettingsPanelButton, { SortSettingsButtonProps } from './SortSettingsPanelButton/SortSettingsPanelButton'
import styles from './SortSettingsPanel.module.css';

/**
 * An interface that details...
 *
 * @param interfaceParam This param represents...
*/

export type SettingsArray = [string, () => void]

/**
 * The functional component for the SortSettingsPanel
 *
 * @param myParam your params here
*/

const SortSettingsPanel: React.FC<{settings: SettingsArray[]}> = React.memo(({settings}) => {
  return (
    <div className={styles["sort-settings-panel"]}>
      <div className={styles["sort-settings-panel__inner"]}>
        {settings.map((s, idx) => {
          const props: SortSettingsButtonProps = { textContent: s[0], callback: s[1] } 
          return <SortSettingsPanelButton settingBtnProps={props}/>
        })}
      </div>
    </div>
  )
})

export default SortSettingsPanel;