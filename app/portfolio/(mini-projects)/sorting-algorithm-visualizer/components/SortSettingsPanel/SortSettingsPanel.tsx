import React from 'react';
import SortSettingsPanelButton, { SortSettingsButtonProps } from './SortSettingsPanelButton/SortSettingsPanelButton'
import styles from './SortSettingsPanel.module.css';
import { SettingsPanelItem, SettingsPanelSelect } from '../../models/sort-models';
import SortSettingsPanelSelect from './SortSettingsPanelSelect/SortSettingsPanelSelect';
/**
 * The functional component for the SortSettingsPanel
 *
 * @param myParam your params here
*/

const SortSettingsPanel: React.FC<{actions: SettingsPanelItem[]}> = React.memo(({actions}) => {
  return (
    <div className={styles["sort-settings-panel"]}>
      <div className={styles["sort-settings-panel__inner"]}>
        {actions.map((a, idx) => {
          if(a.type === "BUTTON") {            
            const props: SortSettingsButtonProps = { textContent: a.textContent, callback: a.callback as () => void} 
            return <SortSettingsPanelButton settingBtnProps={props} key={`spi-${idx}`}/>
          } else if (a.type == "SELECT") {
            let props = a as SettingsPanelSelect
            return <SortSettingsPanelSelect options={props.options} callback={props.callback} key={`spi-${idx}`}/>} 
        })}
      </div>
    </div>
  )
})

export default SortSettingsPanel;