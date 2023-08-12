import React from 'react';
import { TextColorOptions } from '@/app/models/global-types';
import { SettingsPanelItem } from '../../models/sort-models';
import styles from './SortHeader.module.css';
import SortSettingsPanel from '../SortSettingsPanel/SortSettingsPanel';

/**
 * The functional component for the SortHeader
*/

const SortHeader: React.FC<{actions: SettingsPanelItem[]}> = React.memo(({actions}) => {
  return (
    <div className={styles["sort-header"]}>
      <div className={styles["sort-header__heading"]}>
        <h2 className={TextColorOptions.PRIMARY_BLUE}>Sorting Algorithm Visualizer</h2>
      </div>
      <SortSettingsPanel actions={actions} />
    </div>
  )
})

export default SortHeader;