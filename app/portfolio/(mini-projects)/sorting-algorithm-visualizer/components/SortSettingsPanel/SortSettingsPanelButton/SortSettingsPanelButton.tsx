import styles from './SortSettingsPanelButton.module.css';

/**
 * An interface that details...
 *
 * @param interfaceParam This param represents...
*/

export interface SortSettingsButtonProps {
  textContent: string,
  callback: () => void,
}

/**
 * The functional component for the SortSettingsPanelButton
 *
 * @param myParam your params here
*/

const SortSettingsPanelButton: React.FC<{settingBtnProps: SortSettingsButtonProps}> = ({settingBtnProps}) => {
  return (
    <div className={styles["sort-settings-button__outer"]}>
      <button onClick={settingBtnProps.callback} className={styles["sort-settings-button"]}>
        {settingBtnProps.textContent}
      </button>
    </div>
  )
}

export default SortSettingsPanelButton;