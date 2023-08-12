import React from 'react';
import SortSettingsPanelButton, { SortSettingsButtonProps } from './SortSettingsPanelButton/SortSettingsPanelButton'
import styles from './SortSettingsPanel.module.css';
import { SettingsPanelItem } from '../../models/sort-models';

/**
 * The functional component for the SortSettingsPanel
 *
 * @param myParam your params here
*/

const SortSettingsPanel: React.FC<{settings: SettingsPanelItem[]}> = React.memo(({settings}) => {
  return (
    <div className={styles["sort-settings-panel"]}>
      <div className={styles["sort-settings-panel__inner"]}>
        {settings.map((s, idx) => {
          const props: SortSettingsButtonProps = { textContent: s.textContent, callback: s.callback } 
          return <SortSettingsPanelButton settingBtnProps={props}/>
        })}
      </div>
    </div>
  )
})

export default SortSettingsPanel;